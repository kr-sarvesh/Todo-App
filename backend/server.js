const express = require('express')
const app = express('./app')
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// //routes
// app.get('/myget', (req, res) => {
//   console.log(req.body)
//   res.send(req.body)
// })

app.listen(4000, () => console.log('Server is running on port 4000'))
