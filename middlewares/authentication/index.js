const authenticationMiddleware = (req, res, next) => {
  console.log('[AUTHENTICATION] Verifying...')

  next()
}

module.exports = authenticationMiddleware
