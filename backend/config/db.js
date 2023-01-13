const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
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
