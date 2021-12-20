exports.middlewareGlobal = (req, res, next) => {
  console.log()
  console.log('Passei no Middleware')
  console.log()
  next()
}

exports.checkCsrfError = (erro, req, res, next) => {
  if (erro && 'EBADCSRFTOKEN' === erro.code) {
    return res.render('404')
  }
  next()
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}
