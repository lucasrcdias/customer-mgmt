const Phone        = require('./../../models/phone')
const PhoneService = require('./../../services/phone')

const PhoneRoutes = (api) => {
  api.get('/customers/:id/phones', (req, res) => {
    req.currentCustomer.getPhones()
      .then((phones) => {
        res.status(200).send({ 'phones': phones || [] })
      })
  })

  api.post('/customers/:id/phones', (req, res) => {
    const phone       = req.body.phone
    phone.customer_id = req.currentCustomer.id

    PhoneService.create(phone)
      .then((phone) => {
        res.status(201).send(phone)
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })

  api.put('/customers/:id/phones', (req, res) => {
    const phone       = req.body.phone
    phone.id          = req.query.phone_id
    phone.customer_id = req.currentCustomer.id

    PhoneService.update(phone)
      .then((phone) => {
        res.status(201).send(phone)
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })

  api.delete('/customers/:id/phones', (req, res) => {
    const phone = { 'id': req.query.phone_id, 'customer_id': req.currentCustomer.id }

    PhoneService.destroy(phone)
      .then((phone) => {
        res.status(200).send({ 'message': 'Telefone removido com sucesso' })
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })
}

module.exports = PhoneRoutes
