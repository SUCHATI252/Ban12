import express from 'express'
import User from './controllers/userController'
import Person from './controllers/personController'
import Login from './controllers/loginController'
const $rout = express.Router()
$rout.post('/users', User.AllUsers)

$rout.post('/infections/all', Person.infections_all)

$rout.post('/infections/today', Person.infections_today)

$rout.post('/login/check_login', Login.check_login)

$rout.post('/test', (req, res) => {
  return res.json({ name: req.body.name })
})

export default $rout
