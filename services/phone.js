const _     = require('lodash')
const Phone = require('./../models/phone')

const create = (phone) => {
  return new Promise((resolve, reject) => {
    Phone.create(phone)
      .then((phone) => {
        resolve(phone)
      })
      .catch((phone) => {
        reject({ 'errors': phone.errors })
      })
  })
}

const update = (phone) => {
  return new Promise((resolve, reject) => {
    Phone.findOne({ 'where': { 'id': phone.id, 'customer_id': phone.customer_id } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': 'Telefone não encontrado' })
        }

        record.update(_.omit(phone, ['id', 'customer_id']))
          .then((phone) => {
            resolve(phone)
          })
          .catch((phone) => {
            reject({ 'errors': phone.errors })
          })
      })
  })
}

const destroy = (phone) => {
  return new Promise((resolve, reject) => {
    Phone.findOne({ 'where': { 'id': phone.id, 'customer_id': phone.customer_id } })
      .then((record) => {
        if (!record) {
          return reject({ 'errors': 'Telefone não encontrado' })
        }

        record.destroy()
          .then((phone) => {
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
