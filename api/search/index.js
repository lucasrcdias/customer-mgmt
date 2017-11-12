const SearchService = require('./../../services/search')

const searchRoutes = (api) => {
  api.get('/search', (req, res) => {
    SearchService.findCustomers(req.query.phone, req.currentUser.id)
      .then((customers) => {
        res.status(200).send(customers)
      })
  })
}

module.exports = searchRoutes
