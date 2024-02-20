function cartProductCount(){
    const currentProductNum = getElementValueById('product-quantity')
    const updatedProductNum = currentProductNum + 1;
    // console.log(updatedProductNum)
    setElementValuebyId('product-quantity',updatedProductNum)
}


// document.getElementById('product-img-container').style.display = 'none'
