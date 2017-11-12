const _       = require('lodash')
const Address = require('./../models/address')

const create = (address) => {
  return new Promise((resolve, reject) => {
    Address.create(address)
      .then((address) => {
        resolve(address)
      })
      .catch((address) => {
        reject({ 'errors': address.errors })
      })
  })
}

const update = (address) => {
  return new Promise((resolve, reject) => {
    Address.findOne({ 'where': { 'id': address.id, 'customer_id': address.customer_id } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': 'Endereço não encontrado' })
        }

        record.update(_.omit(address, ['id', 'customer_id']))
          .then((address) => {
            resolve(address)
          })
          .catch((address) => {
            reject({ 'errors': address.errors })
          })
      })
  })
}

const destroy = (address) => {
  return new Promise((resolve, reject) => {
    Address.findOne({ 'where': { 'id': address.id, 'customer_id': address.customer_id } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': 'Endereço não encontrado' })
        }

        record.destroy()
          .then((address) => {
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
