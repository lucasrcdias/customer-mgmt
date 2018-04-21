const _    = require('lodash')
const User = require('./../../models/user')
const Authenticate = require('./../../services/auth')

const usersRoutes = (api) => {
  api.get('/me', (req, res) => {
    const currentUser = _.omit(req.currentUser.get({ 'plain': true }), ['password']);
    res.status(200).send(currentUser);
  });

  api.post('/users', (req, res) => {
    User.create(req.body.user)
      .then((user) => {
        user = _.omit(user.get({ 'plain': true }), ['password'])

        Authenticate(req.body.user)
          .then((user) => {
            res.status(200).send(user)
          })
          .catch((error) => {
            res.status(400).send(error)
          })
      })
      .catch((user) => {
        res.status(400).send({ 'errors': user.errors })
      })
  });
}

module.exports = usersRoutes
