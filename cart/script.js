// let navLogin = document.getElementById('navLogin');
// let navSignUp = document.getElementById('navSignUp');
// let navHome = document.getElementById('navHome');
// let navCart = document.getElementById('navCart');
// let navShop = document.getElementById('navShop');
// let navProfile = document.getElementById('navProfile');
// let cartItems = document.getElementById('cartItems');
// let emptyCart = document.getElementById('emptyCart');
// let checkoutList = document.getElementById('checkoutList');
// let priceList = document.getElementById('priceList');
// let total = document.getElementById('total');


// navLogin.addEventListener('click', () => {
//     window.location.href = 'https://qajay0832.github.io/MeShop/login/'
// })
// navSignUp.addEventListener('click', () => {
//     window.location.href = 'https://qajay0832.github.io/MeShop/signup'
// })
// navHome.addEventListener('click', () => {
//     window.location.href = 'https://qajay0832.github.io/MeShop/'
// })
// navShop.addEventListener('click', () => {
//     window.location.href = 'https://qajay0832.github.io/MeShop/shop/'
// })
// navProfile.addEventListener('click', () => {
//     window.location.href = 'https://qajay0832.github.io/MeShop/profile'
// })
// navCart.addEventListener('click', () => {
//     window.location.href = 'https://qajay0832.github.io/MeShop/cart'
// })
// document.addEventListener("DOMContentLoaded", () => {
//     let currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '[]');
//     if (currentUser.length > 0) {
//         AddtoCart();
//     } else {
//         window.location.href = 'https://qajay0832.github.io/MeShop/login/'
//     }


// })
// function Pay(){
//     document.getElementById("checkoutBtn").onclick = function (e) {
//         var options = {
//           key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
//           amount: Number(JSON.parse(localStorage.getItem('total')??'0')) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//           currency: "INR",
//           name: "MyShop Checkout",
//           description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//           theme: {
//             color: "#000",
//           },
//           image:
//             "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
//         };
      
//         var rzpy1 = new Razorpay(options);
//         rzpy1.open();
//         // clear mycart - localStorage
//         e.preventDefault();
//       };
      
// }
// function AddtoCart(cart) {
//     Pay();
//     cart = cart || JSON.parse(localStorage.getItem('cart'));
//     cartItems.innerHTML = '';
//     if (cart.length > 0) {
//         cartItems.style.display = 'flex';
//         checkoutList.style.display = 'block';
//         emptyCart.style.display = 'none';
//         let amt=0;
//         cart.forEach(element => {
//             let products = JSON.parse(localStorage.getItem('products'));
//             let e = products.filter(item => {
//                 return element == item.id;
//             })
//             e.forEach(item => {
//                 cartItems.innerHTML += card(item);
//                 priceList.innerHTML += `<div class="priceListItem">
//                                             <div id="itemName">${item.title}</div>
//                                             <div id="price">$${item.price}</div>
//                                         </div>`
//                 amt=amt+Number(item.price)
//             })
//             total.innerHTML=`$ ${amt}`;
//             localStorage.setItem('total',amt)
//         });
//     }
//     else {
//         cartItems.style.display = 'none';
//         checkoutList.style.display = 'none';
//         emptyCart.style.display = 'flex';
//     }
// }
// function RemoveFromCart(id) {
//     let cart = JSON.parse(localStorage.getItem('cart'));
//     cart = cart.filter(e => e != id);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     AddtoCart(cart);
// }
// function card(item) {
//     return `<div class="item">
//     <img src="${item.image}" alt="Item" class="itemImage"/>
//     <div>
//     <div class="info">
//       <div class="row">
//         <div class="price">$${item.price}</div>
//         <div class="sized">${item.sizes.map(size => {
//         return size
//     })}</div>
//       </div>
//       <div class="colors">
//         Colors:
//         <div class="row">
//           ${item.colors.map(color => {
//         if (color == "blue") {
//             return `<div class="circle" style="background-color: blue"></div>`
//         }
//         else if (color == "white") {
//             return `<div class="circle" style="background-color: white; border :1px solid black"></div>`
//         }
//         else if (color == "red") {
//             return `<div class="circle" style="background-color: red"></div>`
//         }
//         else if (color == "green") {
//             return `<div class="circle" style="background-color: green"></div>`
//         }
//         else {
//             return `<div class="circle" style="background-color: black"></div>`
//         }

//     })}
//         </div>
//       </div>
//       <div class="row">Rating: ${item.rating.rate}</div>
//       <div class="row itemTitle">${item.title}</div>
//     </div>
//     <button id="addBtn" onclick="RemoveFromCart(${item.id})">Remove from Cart</button>
//     </div>
//   </div>`
// }