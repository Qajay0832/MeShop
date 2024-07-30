let email = document.getElementById('email');
let password = document.getElementById('password');
let login = document.getElementById('login');
let error = document.getElementById('error');
let success = document.getElementById('success');
let navLogin=document.getElementById('navLogin');
let navSignUp=document.getElementById('navSignUp');
let navHome=document.getElementById('navHome');
let navCart=document.getElementById('navCart');
let navShop=document.getElementById('navShop');
let navProfile=document.getElementById('navProfile');

navLogin.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501/login/'
})
navSignUp.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501/signup/'
})
navHome.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501'
})
navShop.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501/shop'
})
navProfile.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501/profile'
})
navCart.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501/cart'
})

error.style.color = 'red';
success.style.color = 'green';
login.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users') ?? '[]');
    let user = users.filter(user => user.email == email.value);
    if (user.length > 0) {
        if (user[0].password == password.value) {
            error.style.display = 'none';
            success.style.display = 'block';
            success.innerHTML = 'Successfully Logged In !';
            localStorage.setItem('currentUser',JSON.stringify(user))
            setTimeout(() => {
                window.location.href = 'http://127.0.0.1:5501/profile/'
            }, 2000)
        }
        else {
            error.style.display = 'block';
            success.style.display = 'none';
            error.innerHTML = 'Please Enter Valid Details !'
        }
    }
    else {
        error.style.display = 'block';
        success.style.display = 'none';
        error.innerHTML = 'Email Does Not Exists !'
    }
})