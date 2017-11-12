const Customer = require('./../../models/customer')

const CustomerMiddleware = (req, res, next) => {
  const customerId = req.params.id

  Customer.findOne({ 'where': { 'id': customerId, 'user_id': req.currentUser.id } })
    .then((customer) => {
      if (!customer) {
        return res.status(400).send({ 'errors': 'Cliente não encontrado' })
      }

      req.currentCustomer = customer
      next()
    })
}

module.exports = CustomerMiddleware
