class Dish {
  constructor({ name, price, desc, isDelivered = false }) {
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.isDelivered = isDelivered;
  }
}

module.exports = Dish;
