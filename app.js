const store = [
    {
        id: 1,
        name: 'Cookie Dough',
        image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1
    }, { id: 2, name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 }, { id: 3, name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }, { id: 4, name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 }, { id: 5, name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]


let cart = []
let total = 0

function drawItem() {

    let template = ''
    for (let i = 0; i < store.length; i++) {
        const item = store[i];
        template += `
        <div class="col-12 col-md-4 text-center bg-light" onclick="buyItem(${item.id})">
            <img class=" img-fluid img-size"
                src=${item.image}
                alt="">
            <div class="d-flex justify-content-between p-2">
                <h6>${item.name}</h6>
                <p>$${item.price}</p>
            </div>
        </div>
        `
    }

    document.getElementById('menu').innerHTML = template

}



drawItem()

function drawCart() {
    let subTotal = 0
    let template = ''
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        subTotal += item.price
        template += `
    <div class="col-12">
        <div class="d-flex justify-content-between p-1">
            <h6>${item.name}</h6>
            <b>$${item.price}</b>
            <button class="btn btn-dark" onclick ="removeItem(${item.id})" >remove</button>
        </div>
    </div>
        `
    }
    total = subTotal
    document.getElementById('cart').innerHTML = template
    document.getElementById('total').innerText = total.toFixed(2)
}


function buyItem(itemId) {
    let itemToAdd = store.find(mi => mi.id == itemId)
    cart.push(itemToAdd)
    total += itemToAdd.price
    drawCart()
}

function checkout() {
    if (cart.length) {
        alert('thanks for coming')
    } else alert('select something')

    cart = []
    total = 0
    drawCart()
}
function removeItem(itemId) {
    const index = cart.findIndex(item => item.id == itemId)
    cart.splice(index, 1)
    drawCart()
}