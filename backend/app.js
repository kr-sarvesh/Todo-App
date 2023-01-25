require('dotenv').config()
const express = require('express')
const app = express()
const connectToDB = require('./config/db')
const cookieParser = require('cookie-parser')
// Importing all Routes here
const todoRoutes = require('./routes/todoRoutes')
const authRoutes = require('./routes/authRoutes')

//Connect to Datbase
connectToDB()

// Middleware
app.use(express.json())
app.use(cookieParser())

//Accepting form data
app.use(express.urlencoded({ extended: true }))

// router middleware
app.use('/', todoRoutes)
app.use('/', authRoutes)

//export app.js
module.exports = app
