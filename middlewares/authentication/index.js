const jwt    = require('jsonwebtoken')
const config = require('config')

const authenticationMiddleware = (req, res, next) => {
  const token = req.header('Authorization')

  console.log('[AUTHENTICATION] Authenticating...')

  jwt.verify(token, config.get('secret'), (error, decoded) => {
    if (error) {
      console.log('[AUTHENTICATION] Authentication failure :(')

      res.send({
        user: {
          errors: {
            token: 'O token informado não é válido'
          }
        }
      })

      return
    }

    console.log('[AUTHENTICATION] Authenticated :)')
    next()
  })
}

module.exports = authenticationMiddleware
