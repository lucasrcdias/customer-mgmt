const _        = require('lodash')
const Customer = require('./../models/customer')
const Messages = require('./../messages')

const create = (customer) => {
  return new Promise((resolve, reject) => {
    Customer.create(customer)
      .then((customer) => {
        resolve(customer)
      })
      .catch((customer) => {
        reject({ 'errors': customer.errors })
      })
  })
}

const update = (customer) => {
  return new Promise((resolve, reject) => {
    Customer.findOne({ 'where': { 'id': customer.id, 'user_id': customer.user_id } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': {
            'customer': { 'not_found': Messages.errors.customer.not_found }
          }})
        }

        record.update(_.omit(customer, ['id', 'user_id']))
          .then((customer) => {
            resolve(customer)
          })
          .catch((customer) => {
            reject({ 'errors': customer.errors })
          })
      })
  })
}

const destroy = (customer) => {
  return new Promise((resolve, reject) => {
    Customer.findOne({ 'where': { 'id': customer.id, 'user_id': customer.user_id } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': {
            'customer': { 'not_found': Messages.errors.customer.not_found }
          }})
        }

        record.destroy()
          .then(() => {
            resolve(true)
          })
      })
  })
}

module.exports = {
  create,
  update,
  destroy
}
