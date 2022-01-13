import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './assets/css/style.css'
import Login from './modules/Login'
import Contato from './modules/Contato'

const sign_in_btn = document.querySelector('#sign-in-btn')
const sign_up_btn = document.querySelector('#sign-up-btn')
const container = document.querySelector('.container-login')

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode')
})

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode')
})

const login = new Login('.form-login')
const cadastro = new Login('.form-cadastro')
login.init()
cadastro.init()

const contato = new Contato('.form-contato')
contato.init()
