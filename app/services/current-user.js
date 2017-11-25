const jwt      = require('jsonwebtoken')
const _        = require('lodash');
const User     = require('./../models/user')
const Messages = require('./../../config/messages')

const fromToken = (decoded) => {
  return new Promise((resolve, reject) => {
    User.findById(decoded.id)
      .then((user) => {
        if (!user) {
          return reject({ 'errors': {
            'user': { 'not_found': Messages.errors.user.not_found }
          } })
        }

        return resolve(user)
      })
  })
}

module.exports = {
  fromToken: fromToken
}
