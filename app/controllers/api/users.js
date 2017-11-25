const _    = require('lodash')
const User = require('./../../models/user')

const usersRoutes = (api) => {
  api.post('/users', (req, res) => {
    User.create(req.body.user)
      .then((user) => {
        user = _.omit(user.get({ 'plain': true }), ['password'])

        res.status(201).send({ 'user': user })
      })
      .catch((user) => {
        res.status(400).send({ 'errors': user.errors })
      })
  })
}

module.exports = usersRoutes
