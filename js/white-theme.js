const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {

    document.body.classList.toggle('dark-theme-variables');

    btnSwitch.classList.toggle('active');

    // Guardamos el modo en localstorage.
    if (document.body.classList.contains('dark-theme-variables')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

// Obtenemos el modo actual.
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-theme-variables');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark-theme-variables');
    btnSwitch.classList.remove('active');
}