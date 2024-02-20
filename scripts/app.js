



// cartDetails-------------------------
function cartDetails() {
    const cartDetails = document.getElementById('cart-details')
    if (cartDetails.style.display === 'block') {
        cartDetails.style.display = 'none'  // dekha jabe na 
    } else {
        cartDetails.style.display = 'block' // block mane dekha hobe.
    }
}


// update number in cart box
function cartProductCount() {
    const currentProductNum = getInnerInt('productCount')
    const updatedProductNum = currentProductNum + 1;
    setElementValuebyId('productCount', updatedProductNum)
}









// --------------------
// control + - button
const productQuantity = getInnerInt('product-quantity')
console.log(productQuantity)

function byPlusMinusBtn() {
    plusBtn = document.getElementById('plus-btn')
    minusBtn = document.getElementById('minus-btn')
}



function getInnerInt(id){
    const element = document.getElementById(id).innerText;
    const int = parseFloat(element)
    return int;
}