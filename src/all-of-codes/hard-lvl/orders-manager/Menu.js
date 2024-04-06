class Menu {
  constructor({ drinks, mainDishes, desserts }) {
    this.drinks = drinks;
    this.mainDishes = mainDishes;
    this.desserts = desserts;
  }

  addDrink({ name, price, ingredients, isRelevant }) {
    this.drinks.push({ name, price, ingredients, isRelevant });
  }
  removeDrink(name) {
    const drinkIdx = this.drinks.findIndex((drink) => drink.name === name);
    this.drinks.splice(drinkIdx, 1);
  }

  addDish({ name, price, ingredients, isRelevant }) {
    this.mainDishes.push({ name, price, ingredients, isRelevant });
  }
  removeDish(name) {
    const dishIdx = this.drinks.findIndex((dish) => dish.name === name);
    this.drinks.splice(dishIdx, 1);
  }

  addDessert({ name, price, ingredients, isRelevant }) {
    this.desserts.push({ name, price, ingredients, isRelevant });
  }
  removeDessert(name) {
    const dessertIdx = this.drinks.findIndex(
      (dessert) => dessert.name === name
    );
    this.drinks.splice(dessertIdx, 1);
  }
}
