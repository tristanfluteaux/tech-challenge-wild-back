const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connection = require('./db-config.js')
const argonautsRouter = require('./routes/Argonauts.js')

const app = express()

const port = process.env.PORT || 4000

connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack)
    } else {
      console.log('connected to database with threadId :  ' + connection.threadId)
    }
  })

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/argonauts', argonautsRouter)


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })