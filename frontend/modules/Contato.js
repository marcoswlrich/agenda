import validator from 'validator'

export default class Contato {
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
    const errors = document.querySelectorAll('.error-cont')
    for (let p of errors) {
      p.remove()
    }

    const el = event.target
    const nomeInput = el.querySelector('input[class="nome"]')
    const emailInput = el.querySelector('input[class="email"]')
    const telInput = el.querySelector('input[class="telefone"]')
    let error = false

    if (!nomeInput.value) {
      let p = document.createElement('p')
      let msgError = document.createTextNode('Nome precisa ser preenchido')
      p.appendChild(msgError)
      p.classList.add('error-cont')
      nomeInput.after(p)
      error = true
    }

    if (!emailInput.value && !telInput.value) {
      let p = document.createElement('p')
      let msgError = document.createTextNode(
        'Email ou telefone deve ser preenchido'
      )
      p.appendChild(msgError)
      p.classList.add('error-cont')
      emailInput.after(p)
      telInput.after(p)
      error = true
      return
    }

    if (!telInput.value && !validator.isEmail(emailInput.value)) {
      let p = document.createElement('p')
      let msgError = document.createTextNode('Email inválido')
      p.appendChild(msgError)
      p.classList.add('error-cont')
      emailInput.after(p)
      error = true
    }

    if (!error) el.submit()
  }
}
