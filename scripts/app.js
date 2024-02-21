
// Add to cart button:
document.getElementById('add-cart-button').addEventListener('click', function (event) {
    // const demo = event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[3]
    // console.log(demo)
    const productName = event.target.parentNode.parentNode.childNodes[3].innerText
    const productPrice = event.target.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[1].childNodes[1].innerText
    const productQuantity = event.target.parentNode.parentNode.childNodes[13].childNodes[1].childNodes[7].innerText;

    const totalPrice = parseFloat(productPrice) * parseFloat(productQuantity);
    const container = document.getElementById('container')
    const parent = document.createElement('div')
    const div = document.createElement('div')
    const p2 = document.createElement('p')
    p2.innerText = productName;
    const p3 = document.createElement('p')
    p3.innerText = `$${productPrice} x ${productQuantity} = ${totalPrice}`
    container.appendChild(parent)
    parent.appendChild(p2)
    parent.appendChild(p3)
})


// function createElementAndAppend() {

// }




// cartDetails------------------
function cartDetailsContainer() {
    const cartDetails = document.getElementById('cart-details')
    if (cartDetails.style.display === 'block') {
        cartDetails.style.display = 'none'  // dekha jabe na 
    } else {
        cartDetails.style.display = 'block' // block mane dekha hobe.
    }
}


// --------------------
// control + - button
const plusBtn = document.getElementById('plus-btn')
plusBtn.addEventListener('click', function () {
    let productQuantity = getInnerInt('product-quantity')
    productQuantity += 1;
    setElementValuebyId('product-quantity', productQuantity)
})

minusBtn = document.getElementById('minus-btn')
minusBtn.addEventListener('click', function () {
    let productQuantity = getInnerInt('product-quantity')
    if (productQuantity > 1) {
        productQuantity -= 1;
        setElementValuebyId('product-quantity', productQuantity)
    }
})













// ---------utility----------------

function getInnerInt(id) {
    const element = document.getElementById(id).innerText;
    const int = parseFloat(element)
    return int;
}

function setElementValuebyId(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value;
}


