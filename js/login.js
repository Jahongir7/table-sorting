let button = document.getElementById('login-button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    checkValues();
})

function checkValues() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username ==='admin' && password === 'admin123') {
        window.location.href = 'dashboard.html'
    }
    else{
        alert("Username yoki parol noto'g'ri");
    }
}

function showpassword() {
    let password = document.getElementById('password');
    password.type = 'text'
}