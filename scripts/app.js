



// cartDetails------------------
function cartDetails() {
    const cartDetails = document.getElementById('cart-details')
    if (cartDetails.style.display === 'block') {
        cartDetails.style.display = 'none'  // dekha jabe na 
    } else {
        cartDetails.style.display = 'block' // block mane dekha hobe.
    }
}




// --------------------
// control + - button
const productQuantity = getInnerInt('product-quantity')



const plusBtn = document.getElementById('plus-btn')
plusBtn.addEventListener('click', function(){
    let productQuantity = getInnerInt('product-quantity')
    productQuantity += 1;
    setElementValuebyId('product-quantity', productQuantity)
})

minusBtn = document.getElementById('minus-btn')














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