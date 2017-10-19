const { Router }  = require('express')
const cors        = require('cors')
const bodyParser  = require('body-parser')
const compression = require('compression')

const defaultMiddleware = (app) => {
  app.use(compression())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())
}

module.exports = defaultMiddleware
