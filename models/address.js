const Sequelize = require('sequelize')
const sequelize = require('./../db')

const AddressAttributes = {
  'zipcode': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' }
    }
  },
  'street': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' }
    }
  },
  'number': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' }
    }
  },
  'city': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' }
    }
  },
  'neighborhood': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': { 'msg': 'não pode ficar em branco' }
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
