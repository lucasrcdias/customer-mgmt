const Sequelize = require('sequelize')
const sequelize = require('./../db')

const PhoneAttributes = {
  'number': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': 'não pode ficar em branco',
      'len': {
        'args': [8, 9],
        'msg': 'deve ter entre 8 e 9 números'
      }
    }
  },
  'area_code': {
    'type': Sequelize.TEXT,
    'allowNull': false,
    'validate': {
      'notEmpty': 'não pode ficar em branco'
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
