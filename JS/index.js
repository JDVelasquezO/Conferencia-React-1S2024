const form = document.getElementById('form');
const username = document.getElementById('name');
const info = document.getElementById('info');

let marker = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(username.value);

    if (username.value !== 'Daniel') {
        marker = false;
    }

    if (marker) {
        window.location = '/home.html';
        localStorage.setItem('username', username.value);
    } else {
        info.innerHTML = `
            <div class="col s12">
                <div class="card red darken-1">
                <div class="card-content white-text">
                    <p>Este nombre de usuario no es correcto</p>
                </div>
                </div>
            </div>
        `;

        resetForm();

        setTimeout(() => {
            info.innerHTML = '';
        }, 3000);
    }
});

const resetForm = () => {
    username.value = '';
    username.focus();
    marker = true;
}