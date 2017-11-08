const jwt    = require('jsonwebtoken')
const config = require('config')

const authRoutes = (api) => {
  api.post('/auth', (req, res) => {
    const user = {
      id: 1,
      name: 'Lucas Ramos',
      email: 'lucasrcdias@gmail.com',
      password: 'supersecret'
    }

    jwt.sign(user, config.get('secret'), { expiresIn: '1d' }, (error, token) => {
      if (error) {
        res.send({
          user: {
            errors: {
              token: 'Não foi possível gerar o token de autenticação'
            }
          }
        })
      }

      res.send({
        token: token
      })
    })
  })
}

module.exports = authRoutes
