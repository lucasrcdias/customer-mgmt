const Sequelize = require('sequelize')
const sequelize = require('./../db')
const Messages  = require('./../messages')

const PhoneAttributes = {
  'number': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty },
      'len': {
        'args': [8, 9],
        'msg': Messages.validations.phone.length
      }
    }
  },
  'area_code': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty }
    }
  },
  'description': {
    'type': Sequelize.TEXT,
    'allowNull': true
  }
}

const PhoneOptions = {
  'timestamps': true,
  'underscored': true
}

const Phone = sequelize.define('phone', PhoneAttributes, PhoneOptions)

module.exports = Phone
