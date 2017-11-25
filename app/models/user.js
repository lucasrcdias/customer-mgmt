const Sequelize = require('sequelize')
const bcrypt    = require('bcrypt')
const sequelize = require('./../../db')
const Messages  = require('./../../config/messages')

const passwordHash = (user, options) => {
  return bcrypt.hash(user.password, 10)
    .then((hash) => { user.password = hash })
}

const UserAttributes = {
  'email': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'unique': { 'msg': Messages.validations.user.unique },
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty },
      'isEmail': { 'msg': Messages.validations.format }
    }
  },
  'name': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty }
    }
  },
  'password': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty },
      'len': {
        'args': [6, 18],
        'msg': Messages.validations.user.length
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
