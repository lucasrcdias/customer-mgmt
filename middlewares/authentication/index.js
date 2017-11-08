const jwt    = require('jsonwebtoken')
const config = require('config')

const authMiddleware = (req, res, next) => {
  if (req.path === '/auth') { return next() }

  const token = req.header('Authorization')

  console.log('[AUTHENTICATION] Authenticating...')

  jwt.verify(token, config.get('secret'), (error, decoded) => {
    if (error) {
      console.log('[AUTHENTICATION] Authentication failure :(')

      return res.send({
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
