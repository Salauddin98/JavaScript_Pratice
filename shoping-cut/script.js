let count = 0;

document.getElementById('first-btn').addEventListener('click', function () {
    count +=1;
    const firstItemProducts = document.getElementById('firstProducts').innerText;
    const firstPriceProduct = document.getElementById('firstPrice').innerText;
    const firstQuantityProduct = document.getElementById('firstQuantity').innerText;

    const priceTotal = parseInt(firstPriceProduct) * parseInt(firstQuantityProduct);

    displayData(firstItemProducts, firstPriceProduct, firstQuantityProduct, priceTotal);
    document.getElementById('first-btn').setAttribute('disabled',true);
    


})
document.getElementById('second-btn').addEventListener('click', function (event) {
    count +=1;
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(productPrice) + parseInt(productQuantity);

    displayData(productName, productPrice, productQuantity, sumTotal)

})
document.getElementById('third-btn').addEventListener('click', function (event) {
    count +=1;
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(productPrice) - parseInt(productQuantity);

    displayData(productName, productPrice, productQuantity, sumTotal)

})
document.getElementById('fourth-btn').addEventListener('click', function (event) {
    count +=1;
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(productPrice) - parseInt(productQuantity);

    displayData(productName, productPrice, productQuantity, sumTotal)

})
document.getElementById('fiv-btn').addEventListener('click', function (event) {
    count +=1;
    const productName = document.getElementById('title').innerText;
    const productPrice = document.getElementById('priceField').value;
    const productQuantity = document.getElementById('quantityField').value;
  

    const sumTotal = parseInt(productPrice) + parseInt(productQuantity);

    displayData(productName, productPrice, productQuantity, sumTotal)

})


function displayData(firstItemProducts, firstPriceProduct, firstQuantityProduct, priceTotal) {
    const tbodyContainer = document.getElementById('tbody-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${firstItemProducts}</td>
    <td>${firstPriceProduct}</td>
    <td>${firstQuantityProduct}</td>
    <td>${priceTotal}</td>
    `;
    tbodyContainer.appendChild(tr);
}