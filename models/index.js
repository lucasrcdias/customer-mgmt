const User     = require('./user')
const Customer = require('./customer')
const Phone    = require('./phone')

// User -> Customer association
User    .hasMany(Customer)
Customer.belongsTo(User)

// Customer -> Phone association
Customer.hasMany(Phone)
Phone   .belongsTo(Customer)

// Database sync
User    .sync()
Customer.sync()
Phone   .sync()
