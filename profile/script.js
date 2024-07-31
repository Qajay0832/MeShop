let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let saveInfo = document.getElementById('saveInfo');
let old = document.getElementById('old');
let password = document.getElementById('new');
let confirmPassword = document.getElementById('confirm');
let change = document.getElementById('change');
let errorName = document.getElementById('errorName');
let successName = document.getElementById('successName');
let errorPassword = document.getElementById('errorPassword');
let successPassword = document.getElementById('successPassword');
let logout = document.getElementById('logout');
let navLogin=document.getElementById('navLogin');
let navSignUp=document.getElementById('navSignUp');
let navHome=document.getElementById('navHome');
let navCart=document.getElementById('navCart');
let navShop=document.getElementById('navShop');
let navProfile=document.getElementById('navProfile');


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

errorName.style.color = 'red';
errorPassword.style.color = 'red';
successName.style.color = 'green';
successPassword.style.color = 'green';

let users = JSON.parse(localStorage.getItem('users') ?? '[]');
let currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '[]');
let index;
console.log(currentUser);
document.addEventListener('DOMContentLoaded', () => {
    console.log(currentUser);
    if (currentUser.length == 0) {
        window.location.href = 'https://qajay0832.github.io/MeShop/login/'
    }
})
for (let i = 0; i < users.length; i++) {
    if (users[i].email == currentUser[0].email) {
        index = i;
        break
    }
}
saveInfo.addEventListener('click', () => {
    if (fname.value == '' || lname.value == '') {
        errorName.style.display = 'block';
        successName.style.display = 'none';
        errorName.innerHTML = 'Please Fill All The Fields';
    }
    else {
        console.log(currentUser, users);
        users[index].fname = fname.value;
        users[index].lname = lname.value;
        currentUser = [users[index]];
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        errorName.style.display = 'none';
        successName.style.display = 'block';
        successName.innerHTML = 'Name Changed Successfully';
    }
})
change.addEventListener('click', (e) => {
    e.preventDefault();
    if (old.value == '' || password.value == '' || confirmPassword.value == '') {
        errorPassword.style.display = 'block';
        successPassword.style.display = 'none';
        errorPassword.innerHTML = 'Please Fill All The Fields';
    }
    else {
        if (currentUser[0].password == old.value) {
            console.log(currentUser[0].password, password.value);
            if (password.value == confirmPassword.value) {
                console.log("1", old, password, confirmPassword);
                users[index].password = password.value;
                currentUser = [users[index]];
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                errorPassword.style.display = 'none';
                successPassword.style.display = 'block';
                successPassword.innerHTML = 'Password Changed Successfully';
            }
            else {
                errorPassword.style.display = 'block';
                successPassword.style.display = 'none';
                errorPassword.innerHTML = 'Please Make Sure Your Passwords Should Match';
            }

        }
        else {
            errorPassword.style.display = 'block';
            successPassword.style.display = 'none';
            errorPassword.innerHTML = 'Please Make Sure You Entered Correct Password';
        }
    }
})

logout.addEventListener('click',()=>{
    currentUser=[];
    localStorage.setItem('currentUser',JSON.stringify(currentUser));
    window.location.href='https://qajay0832.github.io/MeShop/login/'
})