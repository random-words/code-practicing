const catalog = {
  store: [],

  addProduct({ name, price, category, rating }) {
    this.store.push({
      name,
      price,
      category,
      rating,
    });
  },

  getProductsByCategory(category) {
    return this.store.filter((product) => product.category === category);
  },

  sortByRatingUp() {
    this.store.sort(
      (firstProduct, secondProduct) =>
        firstProduct.rating - secondProduct.rating
    );
  },
  sortByRatingDown() {
    this.store.sort(
      (firstProduct, secondProduct) =>
        secondProduct.rating - firstProduct.rating
    );
  },

  sortByPriceUp() {
    this.store.sort(
      (firstProduct, secondProduct) => firstProduct.price - secondProduct.price
    );
  },
  sortByPriceDown() {
    this.store.sort(
      (firstProduct, secondProduct) => secondProduct.price - firstProduct.price
    );
  },

  getAllProducts() {
    return this.store;
  },
};

catalog.addProduct({ name: "apple", price: 60, category: "fruit", rating: 5 });
catalog.addProduct({
  name: "cuCUMber",
  price: 30,
  category: "vegetable",
  rating: 3,
});
catalog.addProduct({ name: "banana", price: 90, category: "fruit", rating: 5 });

console.log(catalog.getAllProducts());

catalog.sortByRatingUp();
console.log(catalog.getAllProducts());

catalog.sortByPriceDown();
console.log(catalog.getAllProducts());
