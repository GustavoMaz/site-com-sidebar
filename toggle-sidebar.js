document.getElementById('btnsidebar').addEventListener('click', toggleSidebar);
var sidebar = 0;
var inputs = document.querySelectorAll('form .typing-input');

function toggleSidebar() {
    let nav = document.querySelector('nav');
    let formContainer = document.getElementById('form-container');
    if (sidebar == 0 ) {
        nav.style.left = 0;
        formContainer.style.filter = 'brightness(60%)';
        formContainer.style.backdropFilter = 'brightness(60%)';
        formContainer.addEventListener('click', toggleSidebar);
        sidebar = 1;
    } else {
        nav.style.left = '-100vw';
        formContainer.style.filter = 'brightness(100%)';
        formContainer.style.backdropFilter = 'brightness(100%)';
        formContainer.removeEventListener('click', toggleSidebar);
        sidebar = 0;
    }

    for (i in inputs) {
        inputs[i].toggleAttribute('readonly');
    }
}