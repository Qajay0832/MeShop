let login=document.getElementById('login');
let signUp=document.getElementById('signUp');
let navLogin=document.getElementById('navLogin');
let navSignUp=document.getElementById('navSignUp');
let navHome=document.getElementById('navHome');
let navCart=document.getElementById('navCart');
let navShop=document.getElementById('navShop');
let navProfile=document.getElementById('navProfile');

login.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501/login/'
})

signUp.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501/signup/'
})
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