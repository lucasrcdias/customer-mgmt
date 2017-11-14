const Sequelize = require('sequelize')
const sequelize = require('./../db')
const Messages  = require('./../messages')

const AddressAttributes = {
  'zipcode': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty }
    }
  },
  'street': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty }
    }
  },
  'number': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty }
    }
  },
  'city': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty }
    }
  },
  'neighborhood': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': Messages.validations.not_empty }
    }
  },
  'complement': {
    'type': Sequelize.TEXT,
    'allowNull': true
  },
  'description': {
    'type': Sequelize.TEXT,
    'allowNull': true
  }
}

const AddressOptions = {
  'timestamps': true,
  'underscored': true
}

const Address = sequelize.define('address', AddressAttributes, AddressOptions)

module.exports = Address
