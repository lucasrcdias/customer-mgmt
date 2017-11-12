const _    = require('lodash')
const User = require('./../../models/user')

const usersRoutes = (api) => {
  api.post('/users', (req, res) => {
    User.create(req.body.user)
      .then((user) => {
        res.status(201).send(_.omit(user, ['password']))
      })
      .catch((user) => {
        res.status(400).send({ 'errors': user.errors })
      })
  })
}

module.exports = usersRoutes
