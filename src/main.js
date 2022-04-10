import '@/assets/style.scss';

const loginBtn = document.querySelector('.btn-login')
const loginStyle = document.querySelector('.login-style')
const registerBtn = document.querySelector('.btn-register')
const registerStyle = document.querySelectorAll('.register-style')

loginBtn?.addEventListener('click', () => {
  loginStyle.classList.toggle('hidden')
  loginBtn.classList.toggle('btn-primary')
  loginBtn.classList.toggle('btn-info')
  loginStyle.classList.add('opacity-0')
  setTimeout(() => loginStyle.classList.remove('opacity-0'))
})

registerBtn?.addEventListener('click', () => {
  registerStyle.forEach(elem => {
    elem.classList.toggle('hidden')
    elem.classList.add('opacity-0')
    setTimeout(() => elem.classList.remove('opacity-0'))
  })
})