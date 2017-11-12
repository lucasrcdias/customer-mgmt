const Customer = require('./../../models/customer')

const customersRoutes = (api) => {
  api.get('/customers', (req, res) => {
    req.currentUser.getCustomers()
      .then((customers) => {
        res.status(200).send({ 'customers': customers || [] })
      })
  })
}

module.exports = customersRoutes
