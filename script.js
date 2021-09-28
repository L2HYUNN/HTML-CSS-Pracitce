const product = [
    {id: 'p-01', name:' product01'},
    {id: 'p-02', name:' product02'},
    {id: 'p-03', name:' product03'}
]

const productListE1 = document.getElementById('product-list');

product.map(product => {
    const productItem = document.createElement('li');

    productItem.id = product.id;
    productItem.innerHTML = product.name;

    return productItem;
}).forEach(product => {
    productListE1.appendChild(product);
});

setTimeout(() => {
    const removeProduct = document.querySelector('ul li:nth-child(2)');
    removeProduct.remove();
}, 3000);

