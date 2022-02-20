import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/usersModel'
import Find from '../models/find'
// import Salt from '../Libraries/Salt'
// import Hashpass from '../Libraries/Hashpassword'
// import Mail from '../Libraries/Mail'
import Random from '../Libraries/RandomInt'
import time from '../libraries/DateTime'

export default {
  me: (req, res) => {
    const head = req.headers.authorization
    const tokenhead = head.split(' ')[1]
    if (tokenhead) {
      const token = jwt.verify(tokenhead, 'shhhhh')
      return res.json({ user: token })
    } else {
      return res.json({ errer: 'token error' })
    }
  },
  AllUsers: (req, res) => {
    User.findAll((error, result) => {
      if (error) { return res.json({ error }) }
      res.json({ users: result })
    })
  },
  create: (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const rand = Random(8)
    // eslint-disable-next-line no-console
    console.log(rand)
    // 24397410
    const password = bcrypt.hashSync(rand, salt)
    const email = req.body.email
    const newdata = {
      u_name: req.body.u_name,
      salt,
      password,
      email,
      phone: req.body.phone,
      address: req.body.address,
      u_created_at: time.datetime
    }
    if (newdata) {
      Find(email, 'email', 'email', 'users', (erremail, resemail) => {
        if (erremail) { return res.send(erremail) }
        if (resemail) { return res.json({ exitemail: true }) }
        User.addUser(newdata, (err) => {
          if (err) { return res.json(err) }
          // Mail(req.body.email, 'Password', msgText)
          return res.json({ success: true })
        })
      })
    } else {
      res.json({ success: false })
    }
  }
}
