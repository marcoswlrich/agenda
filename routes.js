const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')

// rotas da home
route.get('/', homeController.index)

// rotas de login
route.get('/login', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/log', loginController.login)
route.get('/login/logout', loginController.logout)

//Rotas de contato
route.get('/contato', contatoController.index)

module.exports = route
