const defaultMiddleware = require('./default')

const middlewares = (app) => {
  defaultMiddleware(app)
}

module.exports = middlewares
