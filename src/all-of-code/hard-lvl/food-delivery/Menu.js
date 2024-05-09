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
    // або можна було деструктуризувати об'єкт і замінити значення ключів
    // const { key1, key2, key3 } = obj1
    // obj2.key1 = key1
    // obj2.key2 = key2
    // obj2.key3 = key3

    // або... так?
    // const { key1, key2, key3 } = obj1
    // obj2 = { key1, key2, key3 }
    // (да, вот так, но най буде і тот варіант)
    const oldDishToRemove = this.dishes.includes(oldDish);
    const oldDishIdx = this.dishes.indexOf(oldDishToRemove);
    this.dishes.splice(oldDishIdx, 1, newDish);
  }
}

module.exports = Menu;
