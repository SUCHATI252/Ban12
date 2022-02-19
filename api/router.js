import express from 'express'
import User from './controllers/userController'
import Person from './controllers/personController'
const app = express.Router()
app.post('/users', User.AllUsers)

app.post('/infections/all', Person.infections_all)

app.post('/infections/today', Person.infections_today)

export default app
