const themeToggler = document.querySelector(".tema");

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
})