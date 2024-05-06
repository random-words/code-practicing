const Dish = require("./dish");

class Menu {
  constructor(dishesList = []) {
    this.dishesList = dishesList;
  }

  addDish(dishData) {
    this.dishesList.push(dishData);
  }

  removeDish(name) {
    const dish = this.dishesList.find((dish) => dish.name === name);
    const dishIdx = this.dishesList.indexOf(dish);
    return this.dishesList.splice(dishIdx, 1);
  }
}

const menu = new Menu();

for (let i = 0; i < 10; i += 1) {
  menu.addDish(
    new Dish({
      name: `dish${i + 1}`,
      price: 20 * (i + 1),
      description: `desc${i + 1}`,
      category: `category${i + 1}`,
    })
  );
}

module.exports = menu;
