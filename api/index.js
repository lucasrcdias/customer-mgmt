const { Router }     = require('express')
const authRoutes     = require('./authentication')
const authMiddleware = require('./../middlewares/authentication')

const api = (app) => {
  let api = Router()

  api.use(authMiddleware)

  api.get('/', (req, res) => {
    res.send({ message: 'Autenticado' })
  })

  authRoutes(api)

  return api
}

module.exports = api
