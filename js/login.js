const formUser = document.getElementById('form__user');
const userName = document.getElementById('user__name');
const password = document.getElementById('password');
const register = document.getElementById('register');
const spanError = document.querySelectorAll('.error');

console.log(spanError[0]);
formUser.addEventListener('submit', (e) => {
    e.preventDefault();

   


    if (!userName.value) {
        spanError[0].textContent = 'user name kiriting';
        userName.classList.add('danger');
    } else {
        spanError[0].textContent = '';
        userName.classList.remove('danger');
    }

    if (!password.value) {
        spanError[1].textContent = 'parol kiriting';
        password.classList.add('danger');
    } else {
        spanError[1].textContent = '';
        password.classList.remove('danger');
    }

  
})

