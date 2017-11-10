const Sequelize = require('sequelize')
const bcrypt    = require('bcrypt')
const sequelize = require('./../db')

const userAttributes = {
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

const modelAttributes = {
  'timestamps': true,
  'underscored': true
}

const passwordHash = (user, options) => {
  return bcrypt.hash(user.password, 10)
    .then((hash) => { user.password = hash })
}

const User = sequelize.define('user', userAttributes, modelAttributes)

User.beforeCreate(passwordHash)
User.beforeUpdate(passwordHash)

User.sync()

module.exports = User
