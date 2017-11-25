const Authenticate = require('./../../services/auth')

const authRoutes = (api) => {
  api.post('/auth', (req, res) => {
    Authenticate(req.body.user)
      .then((user) => {
        res.status(200).send(user)
      })
      .catch((error) => {
        res.status(400).send(error)
      })
  })
}

module.exports = authRoutes
