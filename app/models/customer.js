const Sequelize = require('sequelize')
const sequelize = require('./../../db')
const Messages  = require('./../../config/messages')

const CustomerAttributes = {
  'name': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty }
    }
  }
}

const CustomerOptions = {
  'timestamps': true,
  'underscored': true
}

const Customer = sequelize.define('customer', CustomerAttributes, CustomerOptions)

module.exports = Customer
