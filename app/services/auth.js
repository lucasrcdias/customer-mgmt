const jwt      = require('jsonwebtoken')
const config   = require('config')
const bcrypt   = require('bcrypt')
const _        = require('lodash')
const User     = require('./../models/user')
const Messages = require('./../../config/messages')

const Authenticate = (user) => {
  return new Promise((resolve, reject) => {
    User.findOne({ 'where': { 'email': user.email } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': {
            'user': { 'not_found': Messages.errors.user.not_found }
          }})
        }

        record = record.get({ plain: true })

        bcrypt.compare(user.password, record.password)
          .then((result) => {
            if (result) {
              return jwt.sign(_.omit(record, ['password']), config.get('secret'), { expiresIn: '1d' }, (error, token) => {
                if (error) {
                  console.error('[JWT ERROR] ' + error)
                  return reject({ 'errors': {
                    'token': { 'unavailable': Messages.errors.token.unavailable }
                  }})
                }

                return resolve(Object.assign({}, _.omit(record, ['password']), { token }));
              })
            }

            return reject({ 'errors': {
              'user': { 'password': Messages.errors.user.password }
            }})
          })
      })
  })
}

module.exports = Authenticate
