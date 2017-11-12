const Phone    = require('./../models/phone')
const Customer = require('./../models/customer')
const Address  = require('./../models/address')

const findCustomers = (phone, userId) => {
  return new Promise((resolve, reject) => {
    const query = {
      'where': {
        'user_id': userId
      },
      'include': [
        {
          'model': Phone,
          'where': { 'number': phone }
        },
        {
          'model': Address
        }
      ]
    }

    Customer.findAll(query)
      .then((customers) => {
        resolve({ 'customers': customers || [] })
      })
  })
}

module.exports = {
  findCustomers
}
