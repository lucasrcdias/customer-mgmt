const express    = require('express')
const middleware = require('./middleware')
const api        = require('./api')

const app = express()

middleware(app)

app.use('/api', api(app))

app.listen(3000, () => {
  console.info('Customer Management API on port 3000')
})

// Add authentication
// Add mocked API's
// Add models (ORM)
// Add tests
