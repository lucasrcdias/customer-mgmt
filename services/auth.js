const jwt    = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcrypt')
const _      = require('lodash')
const User   = require('./../models/user')

const Authenticate = (user) => {
  return new Promise((resolve, reject) => {
    User.findOne({ 'where': { 'email': user.email } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': { 'user': 'Usuário não encontrado' } })
        }

        record = record.get({ plain: true })

        bcrypt.compare(user.password, record.password)
          .then((result) => {
            if (result) {
              return jwt.sign(_.omit(record, ['password']), config.get('secret'), { expiresIn: '1d' }, (error, token) => {
                if (error) {
                  console.error('[JWT ERROR] ' + error)
                  return reject({ 'errors': { 'token': 'Não foi possível gerar o token de autenticação' } })
                }

                return resolve({ 'token': token })
              })
            }

            return reject({ 'errors': { 'password': 'Senha incorreta' } })
          })
      })
  })
}

module.exports = Authenticate
