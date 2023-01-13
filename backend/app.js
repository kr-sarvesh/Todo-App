require('dotenv').config()
const express = require('express')
const app = express()
const connectToDB = require('./config/db')

// Importing Routes
const todoRoutes = require('./routes/todoRoutes')
const authRoutes = require('./routes/authRoutes')

//Connect to Datbase
connectToDB()

// Middleware
app.use(express.json())
//Accepting form data
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', todoRoutes)
app.use('/', authRoutes)

module.exports = app
