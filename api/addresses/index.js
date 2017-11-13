const Address        = require('./../../models/address')
const AddressService = require('./../../services/address')
const Messages       = require('./../../messages')

const AddressRoutes = (api) => {
  api.get('/customers/:id/addresses', (req, res) => {
    req.currentCustomer.getAddresses()
      .then((addresses) => {
        res.status(200).send({ 'addresses': addresses || [] })
      })
  })

  api.post('/customers/:id/addresses', (req, res) => {
    const address       = req.body.address
    address.customer_id = req.currentCustomer.id

    AddressService.create(address)
      .then((address) => {
        res.status(201).send(address)
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })

  api.put('/customers/:id/addresses', (req, res) => {
    const address       = req.body.address
    address.id          = req.query.address_id
    address.customer_id = req.currentCustomer.id

    AddressService.update(address)
      .then((address) => {
        res.status(201).send(address)
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })

  api.delete('/customers/:id/addresses', (req, res) => {
    const address = { 'id': req.query.address_id, 'customer_id': req.currentCustomer.id }

    AddressService.destroy(address)
      .then((address) => {
        res.status(200).send({ 'message': Messages.confirmations.address.destroy })
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })
}

module.exports = AddressRoutes
