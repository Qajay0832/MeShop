let navLogin = document.getElementById('navLogin');
let navSignUp = document.getElementById('navSignUp');
let navHome = document.getElementById('navHome');
let navCart = document.getElementById('navCart');
let navShop = document.getElementById('navShop');
let navProfile = document.getElementById('navProfile');
let men = document.getElementById('mens');
let women = document.getElementById('womens');
let jewellery = document.getElementById('jewellery');
let electronic = document.getElementById('electronics');
let toggleAll = document.getElementById('toggleAll');
let toggleMen = document.getElementById('toggleMen');
let toggleWomen = document.getElementById('toggleWomen');
let toggleJewellery = document.getElementById('toggleJewellery');
let toggleElectronics = document.getElementById('toggleElectronics');
let menSection = document.getElementById('menSection');
let womenSection = document.getElementById('womenSection');
let jewellerySection = document.getElementById('jewellerySection');
let electronicsSection = document.getElementById('electronicsSection');
let search = document.getElementById('search');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let white = document.getElementById('white');
let black = document.getElementById('black');










navLogin.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/login/'
})
navSignUp.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/signup/'
})
navHome.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501'
})
navShop.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/shop'
})
navProfile.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/profile'
})
navCart.addEventListener('click',()=>{
    window.location.href='http://127.0.0.1:5501/cart'
})

let colorArray = [];
let products;
let colors = ['blue', 'black', 'white', 'green', 'red'];
let sizes = ['XS', 'S', 'M', 'L', 'XL'];
document.addEventListener('DOMContentLoaded', () => {
    let products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        AppendItems(products);
        Searching(products);
        Colors(products)
    }
    else {
        fetch('https://fakestoreapi.com/products').then(res => {
            return res.json()
        }).then(data => {
            let newData = data.map(item => {
                let color = colors.slice(Math.floor(Math.random() * 4));
                let size = sizes.slice(Math.floor(Math.random() * 4));
                item.sizes = size;
                item.colors = color;
                return item;
            })
            localStorage.setItem('products', JSON.stringify(newData));
            AppendItems(newData)
        })
    }

})

function AppendItems(products) {
    menSection.style.display = 'block';
    womenSection.style.display = 'block';
    jewellerySection.style.display = 'block';
    electronicsSection.style.display = 'block';
    let mens = Filter(products)[0];
    let womens = Filter(products)[1];
    let jewelery = Filter(products)[2];
    let electronics = Filter(products)[3];
    womens.forEach(item => {
        women.innerHTML += card(item);
    });
    mens.forEach(item => {
        men.innerHTML += card(item);
    });
    jewelery.forEach(item => {
        jewellery.innerHTML += card(item);
    });
    electronics.forEach(item => {
        electronic.innerHTML += card(item)
    });
}
function Toggle() {
    toggleAll.setAttribute('class', 'filter');
    toggleMen.setAttribute('class', 'filter');
    toggleWomen.setAttribute('class', 'filter');
    toggleJewellery.setAttribute('class', 'filter');
    toggleElectronics.setAttribute('class', 'filter');
    menSection.style.display = 'none';
    womenSection.style.display = 'none';
    jewellerySection.style.display = 'none';
    electronicsSection.style.display = 'none';
}
toggleAll.addEventListener('click', () => {
    Toggle();
    toggleAll.setAttribute('class', 'filter active');
    menSection.style.display = 'block';
    womenSection.style.display = 'block';
    jewellerySection.style.display = 'block';
    electronicsSection.style.display = 'block';
})
toggleMen.addEventListener('click', () => {
    Toggle();
    toggleMen.setAttribute('class', 'filter active');
    menSection.style.display = 'block';
})
toggleWomen.addEventListener('click', () => {
    Toggle();
    toggleWomen.setAttribute('class', 'filter active');
    womenSection.style.display = 'block';
})
toggleJewellery.addEventListener('click', () => {
    Toggle();
    toggleJewellery.setAttribute('class', 'filter active');
    jewellerySection.style.display = 'block';
})
toggleElectronics.addEventListener('click', () => {
    Toggle();
    toggleElectronics.setAttribute('class', 'filter active');
    electronicsSection.style.display = 'block';
})

function Filter(products) {
    let mens = products.filter(item =>
        item.category == "men's clothing"
    )
    let womens = products.filter(item =>
        item.category == "women's clothing"
    )
    let jewelery = products.filter(item =>
        item.category == "jewelery"
    )
    let electronics = products.filter(item =>
        item.category == "electronics"
    )
    men.innerHTML = "";
    women.innerHTML = "";
    jewellery.innerHTML = "";
    electronic.innerHTML = "";
    return [mens, womens, jewelery, electronics]
}
function Searching(products) {
    search.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            let mens = Filter(products)[0];
            let womens = Filter(products)[1];
            let jewelery = Filter(products)[2];
            let electronics = Filter(products)[3];

            if (search.value.trim() == "") {
                AppendItems(products)
                return;
            }
            else {
                Toggle()
                mens.forEach(item => {
                    if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
                        menSection.style.display = 'block';
                        men.innerHTML += card(item);
                    }
                });
                womens.forEach(item => {

                    if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
                        womenSection.style.display = 'block';
                        women.innerHTML += card(item);
                    }
                });
                jewelery.forEach(item => {
                    if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
                        jewellerySection.style.display = 'block';
                        jewellery.innerHTML += card(item);
                    }
                });
                electronics.forEach(item => {
                    if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
                        electronicSection.style.display = 'block';
                        electronic.innerHTML += card(item);
                    }
                });
            }

        }
    })
}

function card(item) {
    return `<div class="item">
                  <img src="${item.image}" alt="Item" class="itemImage"/>
                  <div>
                  <div class="info">
                    <div class="row">
                      <div class="price">$${item.price}</div>
                      <div class="sized">${item.sizes.map(size => {
        return size
    })}</div>
                    </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                        ${item.colors.map(color => {
        if (color == "blue") {
            return `<div class="circle" style="background-color: blue"></div>`
        }
        else if (color == "white") {
            return `<div class="circle" style="background-color: white; border :1px solid black"></div>`
        }
        else if (color == "red") {
            return `<div class="circle" style="background-color: red"></div>`
        }
        else if (color == "green") {
            return `<div class="circle" style="background-color: green"></div>`
        }
        else {
            return `<div class="circle" style="background-color: black"></div>`
        }

    })}
                      </div>
                    </div>
                    <div class="row">Rating: ${item.rating.rate}</div>
                    <div class="row itemTitle">${item.title}</div>
                  </div>
                  <button id="addBtn" onclick="AddtoCart(${item.id})">Add to Cart</button>
                  </div>
                </div>`
}
function CheckColor(products, color, colorArray) {
    Toggle();
    if (colorArray.length > 0) {
        let mens = Filter(products)[0];
        let womens = Filter(products)[1];
        let jewelery = Filter(products)[2];
        let electronics = Filter(products)[3];
        mens.forEach(item => {
            let isSubsetOfMen = colorArray.every((element) => item.colors.includes(element));
            if (isSubsetOfMen) {
                menSection.style.display = 'block';
                men.innerHTML += card(item);
            }
        });
        womens.forEach(item => {
            let isSubsetOfWomen = colorArray.every((element) => item.colors.includes(element));
            if (isSubsetOfWomen) {
                womenSection.style.display = 'block';
                women.innerHTML += card(item);
            }
        });
        jewelery.forEach(item => {
            let isSubsetOfJewellery = colorArray.every((element) => item.colors.includes(element));
            if (isSubsetOfJewellery) {
                jewellerySection.style.display = 'block';
                jewellery.innerHTML += card(item);
            }
        });
        electronics.forEach(item => {
            let isSubsetOfElectronics = colorArray.every((element) => item.colors.includes(element));

            if (isSubsetOfElectronics) {
                electronicsSection.style.display = 'block';
                electronic.innerHTML += card(item);
            }
        });
    }
    else {
        AppendItems(products)
    }
}

function Colors(products) {
    red.addEventListener('click', () => {
        if (red.checked) {
            colorArray.push('red')
        }
        else {
            colorArray = colorArray.filter((element) => element !== 'red');
        }
        CheckColor(products, 'red', colorArray);
    })
    black.addEventListener('click', () => {
        if (black.checked) {
            colorArray.push('black')
        }
        else {
            colorArray = colorArray.filter((element) => element !== 'black');
        }
        CheckColor(products, 'black', colorArray);
    })
    white.addEventListener('click', () => {
        if (white.checked) {
            colorArray.push('white')
        }
        else {
            colorArray = colorArray.filter((element) => element !== 'white');
        }
        CheckColor(products, 'white', colorArray);
    })
    blue.addEventListener('click', () => {
        if (blue.checked) {
            colorArray.push('blue')
        }
        else {
            colorArray = colorArray.filter((element) => element !== 'blue');
        }
        CheckColor(products, 'blue', colorArray);
    })
    green.addEventListener('click', () => {
        if (green.checked) {
            colorArray.push('green')
        }
        else {
            colorArray = colorArray.filter((element) => element !== 'green');
        }
        CheckColor(products, 'green', colorArray);
    })
}

function AddtoCart(id) {
        console.log(id);
        let cart=JSON.parse(localStorage.getItem('cart')??'[]');
        cart.push(id);
        localStorage.setItem('cart',JSON.stringify(cart));
}

