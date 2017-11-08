const { Router }     = require('express')
const authMiddleware = require('./../middlewares/authentication')

const api = (app) => {
  let api = Router()

  api.use(authMiddleware)

  api.get('/', (req, res) => {
    res.send({
      message: 'Autenticado'
    })
  })

  return api
}

module.exports = api
