const express    = require('express')
const middleware = require('./app/middlewares')
const api        = require('./app/controllers/api')
const models     = require('./app/models')

const app = express()

middleware(app)

app.use('/api', api())

app.listen(3000, () => {
  console.info('Customer Management API on port 3000')
})
