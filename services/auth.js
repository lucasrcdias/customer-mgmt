const jwt    = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcrypt')
const User   = require('./../models/user')

const Authenticate = (user) => {
  return new Promise((resolve, reject) => {
    User.findOne({ 'where': { 'email': user.email } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': { 'user': 'Usuário não encontrado' } })
        }

        bcrypt.compare(user.password, record.password)
          .then((result) => {
            if (result) {
              return jwt.sign(user, config.get('secret'), { expiresIn: '1d' }, (error, token) => {
                if (error) {
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
