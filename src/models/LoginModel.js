const mongoose = require('mongoose')
const validator = require('validator')

const LoginSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true }
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
  constructor(body) {
    this.body = body
    this.errors = []
    this.user = null
  }

  async register() {
    this.validar()
    if (this.errors.length > 0) return

    try {
      this.user = await LoginModel.create(this.body)
    } catch (error) {
      console.log(error)
    }
  }

  validar() {
    this.cleanUp()
    if (!validator.isEmail(this.body.email))
      this.errors.push('E-mail inválido!')

    // a senha precisa ter entre 3 e 12 caracteres
    if (this.body.password.length < 3 || this.body.password.length > 12) {
      this.errors.push('A senha precisa ter entre 3 e 12 caracteres. ')
    }
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = ''
      }
    }

    this.body = {
      userName: this.body.userName,
      email: this.body.email,
      password: this.body.password
    }
  }
}

module.exports = Login
