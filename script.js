document.getElementById('btnsubmit').addEventListener('click', validateInput);

function validateInput() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('password-confirm');

    if (isEmpty(name) || isEmpty(email) || isEmpty(password) || isEmpty(passwordConfirm)) {
        window.alert('Por favor, preencha todos os campos');
    }

    if (name.value.length < 3) {
        name.className = 'invalid'
        document.querySelector('#name + div').className = 'invalid msg'; //Seleciona a div imediatamente após o elemento
    }

    if (email.value.includes('@') == false ) {
        email.className = 'invalid'
        document.querySelector('#email + div').className = 'invalid msg';
    }

    if (password.value.length < 8) {
        password.className = 'invalid'
        document.querySelector('#password + div').className = 'invalid msg';
    }

    if (passwordConfirm.value != password.value) {
        passwordConfirm.className = 'invalid'
        document.querySelector('#password-confirm + div').className = 'invalid msg';
    }
}

function isEmpty(elem) {
    if (elem.value.length == 0) {
        return true;
    } else {
        return false;
    }
}