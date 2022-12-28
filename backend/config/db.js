const mongoose = require('mongoose')

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) =>
      console.log('Connected Successfully to DB ${conn.connection.host}')
    )
    .catch((err) => {
      console.error(err.message)
      process.exit(1)
    })
}

module.exports = connectToDB
