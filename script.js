const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.rev');
const registerLink = document.querySelector('.sev');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
const btnPopup = document.querySelector('.login-pop');
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
const loginForm = document.querySelector('.form-box.login');
