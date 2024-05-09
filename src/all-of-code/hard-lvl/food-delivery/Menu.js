class Menu {
  constructor({ dishes = [] }) {
    this.dishes = dishes;
  }

  addDish(dishInfo) {
    return this.dishes.push(dishInfo);
  }

  removeDish(name) {
    const dish = this.dishes.find((dish) => dish.name === name);
    const dishIdx = this.dishes.indexOf(dish);
    return this.dishes.splice(dishIdx);
  }

  updateDish(oldDish, newDish) {
    const oldDishToRemove = this.dishes.includes(oldDish);
    const oldDishIdx = this.dishes.indexOf(oldDishToRemove);
    this.dishes.splice(oldDishIdx, 1, newDish);
  }
}

module.exports = Menu;
