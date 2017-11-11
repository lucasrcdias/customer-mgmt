const { Router }     = require('express')
const authRoutes     = require('./authentication')
const usersRoutes    = require('./users')
const authMiddleware = require('./../middlewares/authentication')

const api = (app) => {
  let api = Router()

  api.use(authMiddleware)

  api.get('/', (req, res) => {
    res.status(200).send({ 'user': req.currentUser })
  })

  authRoutes(api)
  usersRoutes(api)

  return api
}

module.exports = api
