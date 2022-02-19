import express from 'express'
import body from 'body-parser'
import router from './router'
const app = express()
app.use(body.urlencoded({ extended: true }))
app.use(express.json())
app.use(body.json())
app.use(router)

export default app
