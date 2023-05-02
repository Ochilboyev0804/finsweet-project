const formUser = document.getElementById('form__user');
const firstName = document.getElementById('first__name');
const lastName = document.getElementById('last__name');
const userName = document.getElementById('user__name');
const password = document.getElementById('password');
const confirm__password = document.getElementById('confirm__password');
const register = document.getElementById('register');
const spanError = document.querySelectorAll('.error');

formUser.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!firstName.value) {
        spanError[0].textContent = 'first name kiriting';
        firstName.classList.add('danger');
    spanError[0].style.left = "-100px " ;

    } else {
        spanError[0].textContent = '';
        firstName.classList.remove('danger');
    }

    if (!lastName.value) {
        spanError[1].textContent = 'last name kiriting';
        lastName.classList.add('danger');
    } else {
        spanError[1].textContent = '';
        lastName.classList.remove('danger');
    }

    if (!userName.value) {
        spanError[2].textContent = 'user name kiriting';
        userName.classList.add('danger');
    } else {
        spanError[2].textContent = '';
        userName.classList.remove('danger');
    }

    if (!password.value) {
        spanError[3].textContent = 'parol kiriting';
        password.classList.add('danger');
    } else {
        spanError[3].textContent = '';
        password.classList.remove('danger');
    }

    if (!confirm__password.value) {
        spanError[4].textContent = 'parolni qaytadan kiriting';
        confirm__password.classList.add('danger');
    } if (password.value !== confirm__password.value) {
        spanError[4].textContent = 'parolni qaytadan kiriting';
        confirm__password.classList.add('danger');
    }
     else {
        spanError[4].textContent = '';
        confirm__password.classList.remove('danger');
    }
})

