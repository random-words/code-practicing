class Menu {
  constructor({ drinks, mainDishes, desserts }) {
    this.drinks = drinks;
    this.mainDishes = mainDishes;
    this.desserts = desserts;
  }

  addDrink({ name, price, ingredients }) {
    this.drinks.push({ name, price, ingredients });
  }
  removeDrink(name) {
    const drinkIdx = this.drinks.findIndex((drink) => drink.name === name);
    this.drinks.splice(drinkIdx, 1);
  }

  addDish({ name, price, ingredients }) {
    this.mainDishes.push({ name, price, ingredients });
  }
  removeDish(name) {
    const dishIdx = this.drinks.findIndex((dish) => dish.name === name);
    this.drinks.splice(dishIdx, 1);
  }

  addDessert({ name, price, ingredients }) {
    this.desserts.push({ name, price, ingredients });
  }
  removeDessert(name) {
    const dessertIdx = this.drinks.findIndex(
      (dessert) => dessert.name === name
    );
    this.drinks.splice(dessertIdx, 1);
  }
}
