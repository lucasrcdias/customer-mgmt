const defaultMiddleware = require('./default-middleware')

const middlewares = (app) => {
  defaultMiddleware(app)
}

module.exports = middlewares
