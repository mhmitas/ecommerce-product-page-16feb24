function cartProductCount(){
    const currentProductNum = getElementValueById('product-quantity')
    const updatedProductNum = currentProductNum + 1;
    // console.log(updatedProductNum)
    setElementValuebyId('product-quantity',updatedProductNum)
}


// document.getElementById('product-img-container').style.display = 'none'
const cart = document.getElementById('cart')
cart.addEventListener('click', function(){
    const cartDetails = document.getElementById('cart-details')
    
    // if(cartDetails.style.display === 'none'){
    //     cartDetails.style.display = 'block'
    // }else{
    //     console.log('hello')
    // }
})