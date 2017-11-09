const User = require('./../../models/user')

const usersRoutes = (api) => {
  api.post('/users', (req, res) => {
    User.create(req.body.user)
      .then((user) => {
        res.status(201).send(user)
      })
      .catch((user) => {
        res.status(400).send(user)
      })
  })
}

module.exports = usersRoutes
