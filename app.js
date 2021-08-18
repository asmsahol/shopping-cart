// Update Product Quantities & Product Price
function getProductPrice(product, isIncreasing, price) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    if(isIncreasing == true){
        productInput.value = parseInt(productNumber) + 1; 
    } else if(isIncreasing == false && productNumber >= 1){
        productInput.value = parseInt(productNumber) - 1; 
    }
    const getProductPrice = document.getElementById(product +'-price');
    const productPrice = productInput.value * price;
    getProductPrice.innerText = productPrice;
    return productPrice;
}

// Update Tax & Price
function GetTotalPrice(productPrice) {
    const phonePrice = document.getElementById('phone-price');
    const casePrice = document.getElementById('case-price');
    const getSubTotalPrice = document.getElementById('subtotal-price');
    const subTotalPrice = parseInt(phonePrice.innerText) + parseInt(casePrice.innerText);
    getSubTotalPrice.innerText = subTotalPrice
    const getTax = document.getElementById('tax');
    const tax = subTotalPrice / 10;
    getTax.innerText = tax;
    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = subTotalPrice + tax;
}


document.getElementById('case-plus').addEventListener('click', function(){
    const casePrice = getProductPrice('case', true, 59);
    GetTotalPrice(casePrice);
});
document.getElementById('case-minus').addEventListener('click', function(){
    const casePrice = getProductPrice('case', false, 59);
    GetTotalPrice(casePrice);
})
document.getElementById('phone-plus').addEventListener('click', function(){
    const casePrice = getProductPrice('phone', true, 1219);
    GetTotalPrice(casePrice);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    const casePrice = getProductPrice('phone', false, 1219);
    GetTotalPrice(casePrice);
})