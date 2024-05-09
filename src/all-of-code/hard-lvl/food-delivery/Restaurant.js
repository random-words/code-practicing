class Restaurant {
  constructor({ name, menu = null }) {
    this.name = name;
    this.menu = menu;
  }

  createMenu(menu) {
    menu.restaurantName = this.name;
    this.menu = menu;
    return `creation complete`;
  }

  addDish(dish) {
    this.menu.addDish(dish);
    return `added`;
  }

  removeDish(name) {
    this.menu.removeDish(name);
    return `removed`;
  }

  updateDish(oldDish, newDish) {
    this.menu.updateDish(oldDish, newDish);
    return `updated`;
  }

  makeOrder(dish) {
    dish.isDelivered = true;
    console.log(`your ${dish.name} is on the way!`);
  }
}

module.exports = Restaurant;
