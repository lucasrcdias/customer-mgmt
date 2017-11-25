const { Router }     = require('express')
const authRoutes     = require('./authentication')
const usersRoutes    = require('./users')
const customerRoutes = require('./customers')
const searchRoutes   = require('./search')
const authMiddleware = require('./../../middlewares/authentication')

const api = () => {
  let api = Router()

  api.use(authMiddleware)

  api.get('/', (req, res) => {
    res.status(200).send({ 'status': 'OK' })
  })

  authRoutes(api)
  usersRoutes(api)
  customerRoutes(api)
  searchRoutes(api)

  return api
}

module.exports = api
