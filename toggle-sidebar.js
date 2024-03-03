document.getElementById('btnsidebar').addEventListener("click", toggleSidebar);
var sidebar = 0;
var inputs = document.querySelectorAll('form .typing-input, input[type="radio"]');

function toggleSidebar() {
    let nav = document.querySelector('nav');
    let container = document.getElementById('form-container');
    if (sidebar == 0 ) {
        nav.style.left = 0;
        container.style.filter = 'brightness(60%)';
        container.style.backdropFilter = 'brightness(60%)';
        sidebar = 1;
    } else {
        nav.style.left = '-100vw';
        container.style.filter = 'brightness(100%)';
        container.style.backdropFilter = 'brightness(100%)';
        sidebar = 0;
    }

    for (i in inputs) {
        inputs[i].toggleAttribute('readonly');
    }
}