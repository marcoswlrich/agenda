const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// rotas da home
route.get('/', homeController.home)
route.post('/', homeController.trataPost)

//rotas contato
route.get('/contato', contatoController.contato)

module.exports = route
