const jwt  = require('jsonwebtoken')
const _    = require('lodash');
const User = require('./../models/user')

const fromToken = (decoded) => {
  return new Promise((resolve, reject) => {
    User.findById(decoded.id)
      .then((user) => {
        if (!user) {
          return reject({ 'errors': 'Usuário não encontrado' })
        }

        return resolve(_.omit(user.get({ 'plain': true }), ['password']))
      })
  })
}

module.exports = {
  fromToken: fromToken
}
