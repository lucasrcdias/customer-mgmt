const Sequelize = require('sequelize')
const sequelize = require('./../db')

const CustomerAttributes = {
  'name': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' }
    }
  }
}

const CustomerOptions = {
  'timestamps': true,
  'underscored': true
}

const Customer = sequelize.define('customer', CustomerAttributes, CustomerOptions)

module.exports = Customer
