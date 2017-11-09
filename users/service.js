const User = require('./../models/user')

const UsersService = () => {
  function create (params) {
    // email    -> presence, format
    // name     -> presence
    // password -> presence, minlength
  }

  return {
    create: create
  }
}

module.exports = UsersService
