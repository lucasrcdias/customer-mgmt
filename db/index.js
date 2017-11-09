const Sequelize = require('sequelize')
const config    = require('config')

const connection = new Sequelize(
  config.get('db.database'),
  config.get('db.username'),
  config.get('db.password'),
  {
    'host': config.get('db.host'),
    'dialect': 'postgres'
  }
)

connection.authenticate()
  .then(() => {
    console.log('[DATABASE] Connected')
  })
  .catch((error) => {
    console.error('[DATABASE] Connection error. Error: ' + error)
  })

module.exports = connection
