require('dotenv').config()
const express = require('express')
const app = express()
const connectToDB = require('./config/db')

// Importing Routes
const todoRoutes = require('./routes/todoRoutes')

//Connect to Datbase
connectToDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', todoRoutes)

module.exports = app
