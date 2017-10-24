const { Router }  = require('express')
const application = require('../package.json')

const api = (app) => {
  let api = Router()

  api.get('/', (req, res, next) => {
    res.json({
      name: application.name,
      description: application.description,
      version: application.version
    })

    next()
  })

  return api
}

module.exports = api
