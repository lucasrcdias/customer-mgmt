const express    = require('express')
const middleware = require('./middlewares')
const api        = require('./api')
const models     = require('./models')

const app = express()

middleware(app)

app.use('/api', api(app))

app.listen(3000, () => {
  console.info('Customer Management API on port 3000')
})
