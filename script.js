document.getElementById('submit').addEventListener('click', validateInput);
function validateInput() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('password-confirm');

    if (name.value.length == 0) {
        window.alert('Por favor, preencha todos os campos');
    }
}
