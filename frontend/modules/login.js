import validator from 'validator'

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass)
  }

  init() {
    this.events()
  }

  events() {
    if (!this.form) return
    this.form.addEventListener('submit', event => {
      event.preventDefault()
      this.validate(event)
    })
  }

  validate(event) {
    const errors = document.querySelectorAll('.error-login')
    for (let p of errors) {
      p.remove()
    }

    const el = event.target
    const emailInput = el.querySelector('input[name="email"]')
    const passwordInput = el.querySelector('input[name="password"]')
    let error = false

    if (!validator.isEmail(emailInput.value)) {
      let p = document.createElement('p')
      let msgError = document.createTextNode('Email inválido!')
      p.appendChild(msgError)
      p.classList.add('error-login')
      emailInput.after(p)
      error = true
    }

    if (passwordInput.value.length < 6 || passwordInput.value.length > 12) {
      let p = document.createElement('p')
      let msgError = document.createTextNode(
        'A senha precisa ter entre 6 e 12 caracteres.'
      )
      p.appendChild(msgError)
      p.classList.add('error-login')
      passwordInput.after(p)
      error = true
    }

    if (!error) el.submit()
  }
}
