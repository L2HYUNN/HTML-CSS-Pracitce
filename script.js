class Cart {
  constructor() {
    this.store = {};
  }

  addProduct(product) {
    this.store[product.id] = product;
  }

  getProduct(id) {
    return this.store[id];
  }
}

const cart1 = new Cart();

cart1.addProduct({id: 1, name: "note book"});
console.log(cart1.store);
const product = cart1.getProduct(1);
console.log(product);