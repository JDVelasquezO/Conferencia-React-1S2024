const btnCloseSession = document.getElementById('btnCloseSession');

let welcome = document.getElementById('welcome');

window.addEventListener('load', () => {
    let username = localStorage.getItem('username');

    welcome.innerHTML = `Bienvenido ${username}`;
});

btnCloseSession.addEventListener('click', () => {
    localStorage.removeItem('username');

    window.location.href = './index.html';
})