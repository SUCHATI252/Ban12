import express from 'express'
import User from './controllers/userController'
import Person from './controllers/personController'
import Login from './controllers/loginController'
const $rout = express.Router()
$rout.post('/users', User.AllUsers)
$rout.post('/users/me', User.me)
$rout.post('/users/create', User.create)

$rout.post('/infections/all', Person.infections_all)
$rout.post('/infections/listall', Person.infections_list_all)
$rout.post('/person/new', Person.addPerson)

$rout.post('/infections/today', Person.infections_today)

$rout.post('/login/check_login', Login.check_login)

$rout.post('/test', (req, res) => {
  return res.json({ name: req.body.name })
})

export default $rout
