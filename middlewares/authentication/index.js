const jwt    = require('jsonwebtoken')
const config = require('config')

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

  const token = req.header('Authorization')

  console.log('[AUTHENTICATION] Authenticating...')

  jwt.verify(token, config.get('secret'), (error, decoded) => {
    if (error) {
      console.log('[AUTHENTICATION] Authentication failure :(')

      return res.status(401).send({
        user: {
          errors: {
            token: 'O token informado não é válido'
          }
        }
      })
    }

    console.log('[AUTHENTICATION] Authenticated :)')
    next()
  })
}

module.exports = authMiddleware
