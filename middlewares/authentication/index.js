const jwt         = require('jsonwebtoken')
const config      = require('config')
const CurrentUser = require('./../../services/current-user')

const isBypassed = (req) => {
  const bypassed = [
    {
      'path':   '/auth',
      'method': 'POST'
    },
    {
      'path':   '/users',
      'method': 'POST'
    }
  ]

  return bypassed.filter((item) => {
    return req.path === item.path && req.method === item.method
  }).length
}

const authMiddleware = (req, res, next) => {
  if (isBypassed(req)) { return next() }

  const token = req.header('Authorization').replace('Bearer ', '')

  jwt.verify(token, config.get('secret'), (error, decoded) => {
    if (error || !decoded) {
      console.error('[AUTHENTICATION] Authentication failed')

      return res.status(401).send({ 'errors': { 'token': 'O token informado não é válido' } })
    }

    console.log('[AUTHENTICATION] Authentication success')

    CurrentUser.fromToken(decoded)
      .then((user) => {
        req.currentUser = user
        next()
      })
      .catch((error) => { return res.status(401).send(error) })
  })
}

module.exports = authMiddleware
