import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import LoginModel from '../models/loginModel'
import Find from '../models/find'
import Hashpass from '../libraries/Hashpassword'
import Random from '../libraries/RandomInt'
import Mail from '../libraries/Mail'
import Salt from '../libraries/Salt'
import time from '../libraries/DateTime'

export default {
  check_login: (req, res) => {
    const email = req.body.email
    const password = req.body.password
    if (email && password) {
      Find(email, '*', 'email', 'users', (err, result) => {
        if (err) { return res.send(err) }
        if (result) {
          const passHash = bcrypt.hashSync(password, result.salt)
          if (bcrypt.compareSync(password, passHash)) {
            const authUser = {
              name: result.u_name,
              email: result.email,
              phone: result.phone,
              address: result.address
            }
            const data = time.datetime
            LoginModel.updatelogin(result.u_id, data, (error) => {
              if (error) { res.send(error) }
              return res.json({
                success: true,
                token: jwt.sign(authUser, 'shhhhh')
              })
            })
          } else {
            res.json({ errorpassword: true })
          }
        } else {
          res.json({ error_email: true })
        }
      })
    } else {
      res.redirect('/')
    }
  },

  forgot_password: (req, res) => {
    const email = req.body.email
    Find(email, 'u_id', 'email', 'users', (err, result) => {
      if (err) { return res.send(err) }
      if (result) {
        const rand = Random(6)
        const code = jwt.sign(rand, 'shhhhh')
        const Text = `Code Reset Password : ${rand}`
        const id = result.u_id
        LoginModel.updatecode(id, code, (error) => {
          if (!error) {
            Mail(email, 'Reset Password', Text)
            res.json({ success: true, id })
          } else {
            res.json({ success: false, Nosend: true })
          }
        })
      } else {
        res.json({ success: false })
      }
    })
  },

  reset_password: (req, res) => {
    const id = req.body.id
    const code = jwt.sign(req.body.code, 'shhhhh')
    const salt = Salt()
    const password = Hashpass(req.body.new_pass, salt)
    const data = {
      password,
      salt,
      code: '',
      u_updated_at: time.datetime
    }
    Find(id, 'code', 'u_id', 'users', (err, result) => {
      if (err) { return res.send(err) }
      if (result) {
        if (code === result.code) {
          LoginModel.update_password(id, data, (error) => {
            if (!error) {
              res.json({ success: true })
            } else {
              res.json({ success: false })
            }
          })
        } else {
          res.json({ error: true })
        }
      }
    })
  },
  reset_code: (req, res) => {
    const id = req.body.id
    const code = ''
    Find(id, 'u_id', 'u_id', 'users', (err, result) => {
      if (err) { return res.send(err) }
      if (result) {
        LoginModel.updatecode(id, code, (error) => {
          if (!error) {
            res.json({ success: true })
          } else {
            res.json({ success: false })
          }
        })
      }
    })
  }
}
