const Customer           = require('./../../models/customer')
const CustomerService    = require('./../../services/customer')
const CustomerMiddleware = require('./../../middlewares/customer')
const PhoneRoutes        = require('./../phones')

const customersRoutes = (api) => {
  api.get('/customers', (req, res) => {
    req.currentUser.getCustomers()
      .then((customers) => {
        res.status(200).send({ 'customers': customers || [] })
      })
  })

  api.post('/customers', (req, res) => {
    const customer   = req.body.customer
    customer.user_id = req.currentUser.id

    CustomerService.create(customer)
      .then((customer) => {
        res.status(201).send(customer)
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })

  api.put('/customers', (req, res) => {
    const customer   = req.body.customer
    customer.id      = req.query.customer_id
    customer.user_id = req.currentUser.id

    CustomerService.update(customer)
      .then((customer) => {
        res.status(201).send(customer)
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })

  api.delete('/customers', (req, res) => {
    const customer = { 'id': req.query.customer_id, 'user_id': req.currentUser.id }

    CustomerService.destroy(customer)
      .then((customer) => {
        res.status(200).send({ 'message': 'Cliente removido com sucesso' })
      })
      .catch((errors) => {
        res.status(400).send(errors)
      })
  })

  api.use('/customers/:id', CustomerMiddleware)
  PhoneRoutes(api)
}

module.exports = customersRoutes
