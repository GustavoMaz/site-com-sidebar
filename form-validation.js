document.getElementById('btnsubmit').addEventListener('click', validateInput);

function validateInput() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('password-confirm');
    var nameMsg = document.querySelector('#name + div.msg'); //Seleciona a div imediatamente após o elemento
    var emailMsg = document.querySelector('#email + div.msg');
    var passwordMsg = document.querySelector('#password + div.msg');
    var passwordConfirmMsg = document.querySelector('#password-confirm + div.msg');

    if (isEmpty(name) || isEmpty(email) || isEmpty(password) || isEmpty(passwordConfirm)) {
        window.alert('Por favor, preencha todos os campos');
    }

    if (name.value.length < 3) {
        name.classList.add('invalid');
        nameMsg.classList.add('invalid');
    } else { 
        name.classList.remove('invalid');
        nameMsg.classList.remove('invalid');
    }

    if (email.value.includes('@') == false ) {
        email.classList.add('invalid');
        emailMsg.classList.add('invalid');
    } else { 
        email.classList.remove('invalid');
        emailMsg.classList.remove('invalid');
    }

    if (password.value.length < 8) {
        password.classList.add('invalid');
        passwordMsg.classList.add('invalid');
    } else { 
        password.classList.remove('invalid');
        passwordMsg.classList.remove('invalid');
    }

    if (passwordConfirm.value != password.value) {
        passwordConfirm.classList.add('invalid');
        passwordConfirmMsg.classList.add('invalid');
    } else {
        passwordConfirm.classList.remove('invalid');
        passwordConfirmMsg.classList.remove('invalid');
    }
}

function isEmpty(elem) {
    if (elem.value.length == 0) {
        return true;
    } else {
        return false;
    }
}