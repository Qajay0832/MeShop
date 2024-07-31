let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmpassword = document.getElementById('confirmpassword');
let signup = document.getElementById('signup');
let error = document.getElementById('error');
let success = document.getElementById('success');
let navLogin=document.getElementById('navLogin');
let navSignUp=document.getElementById('navSignUp');
let navHome=document.getElementById('navHome');
let navCart=document.getElementById('navCart');
let navShop=document.getElementById('navShop');
let navProfile=document.getElementById('navProfile');
error.style.color = 'red';
success.style.color = 'green';

navLogin.addEventListener('click',()=>{
    window.location.href='https://qajay0832.github.io/MeShop/login/'
})
navSignUp.addEventListener('click',()=>{
    window.location.href='https://qajay0832.github.io/MeShop/signup/'
})
navHome.addEventListener('click',()=>{
    window.location.href='https://qajay0832.github.io/MeShop'
})
navShop.addEventListener('click',()=>{
    window.location.href='https://qajay0832.github.io/MeShop/shop'
})
navProfile.addEventListener('click',()=>{
    window.location.href='https://qajay0832.github.io/MeShop/profile'
})
navCart.addEventListener('click',()=>{
    window.location.href='https://qajay0832.github.io/MeShop/cart'
})

signup.addEventListener('click', (e) => {
    e.preventDefault()
    if (fname.value == '' || lname.value == '' || password.value == '' || email.value == '' || confirmpassword.value == '') {
        error.style.display = "block";
        success.style.display = "none";
        error.innerHTML = "All Fields Are Required !";
    }
    else {
        if (password.value == confirmpassword.value) {
            let users = JSON.parse(localStorage.getItem('users') ?? '[]');
            let user = users.filter(user => user.email == email.value);
            console.log(user);
            if (user.length) {
                error.style.display = "block";
                success.style.display = "none";
                error.innerHTML = "Email Already Exists ! Try Different !";
            }
            else {
                error.style.display = "none";
                success.style.display = "block";
                success.innerHTML = "Successfully Registered !";
                users.push({
                    fname: fname.value,
                    lname: lname.value,
                    email: email.value,
                    password: password.value,
                })
                localStorage.setItem('users', JSON.stringify(users))
                setTimeout(()=>{
                    window.location.href = "https://qajay0832.github.io/MeShop/login";
                },2000)
            }
        }
        else {
            error.style.display = "block";
            success.style.display = "none";
            error.innerHTML = "Password And Confirm Password Should Match !";
        }
    }
})