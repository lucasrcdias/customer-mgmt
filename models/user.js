const Sequelize = require('sequelize')
const bcrypt    = require('bcrypt')
const sequelize = require('./../db')

const passwordHash = (user, options) => {
  return bcrypt.hash(user.password, 10)
    .then((hash) => { user.password = hash })
}

const UserAttributes = {
  'email': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'unique': { 'msg': 'já está em uso' },
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' },
      'isEmail': { 'msg': 'formato inválido' }
    }
  },
  'name': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' }
    }
  },
  'password': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' },
      'len': {
        'args': [6, 18],
        'msg': 'deve ter entre 6 e 18 caracteres'
      }
    }
  }
}

const UserOptions = {
  'timestamps': true,
  'underscored': true,
  'hooks': {
    'beforeCreate': passwordHash,
    'beforeUpdate': passwordHash
  }
}

const User = sequelize.define('user', UserAttributes, UserOptions)

module.exports = User
