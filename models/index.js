const User     = require('./user')
const Customer = require('./customer')

User.hasMany(Customer)
Customer.belongsTo(User)

User.sync()
Customer.sync()
