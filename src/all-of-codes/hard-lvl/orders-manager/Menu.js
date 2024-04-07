class Menu {
  constructor({ drinks, dishes, desserts }) {
    this.drinks = drinks;
    this.dishes = dishes;
    this.desserts = desserts;
  }

  addDrink({ name, price, ingredients, isRelevant }) {
    this.drinks.push({ name, price, ingredients, isRelevant });
  }
  removeDrink(name) {
    if (this.drinks.find((drink) => drink.name === name)) {
      const drinkIdx = this.drinks.findIndex((drink) => drink.name === name);
      this.drinks.splice(drinkIdx, 1);
      return `done, chief!`;
    }
    return `cheif, we don't have this drink in menu`;
  }

  addDish({ name, price, ingredients, isRelevant }) {
    this.dishes.push({ name, price, ingredients, isRelevant });
  }
  removeDish(name) {
    if (this.dishes.find((dish) => dish.name === name)) {
      const dishIdx = this.dishes.findIndex((dish) => dish.name === name);
      this.dishes.splice(dishIdx, 1);
      return `done, chief!`;
    }
    return `cheif, we don't have this dish in menu`;
  }

  addDessert({ name, price, ingredients, isRelevant }) {
    this.desserts.push({ name, price, ingredients, isRelevant });
  }
  removeDessert(name) {
    if (this.desserts.find((dessert) => dessert.name === name)) {
      const dessertIdx = this.desserts.findIndex(
        (dessert) => dessert.name === name
      );
      this.desserts.splice(dessertIdx, 1);
      return `done, chief!`;
    }
    return `cheif, we don't have this dessert in menu`;
  }
}

const menu = new Menu({ drinks: [], dishes: [], desserts: [] });
menu.addDrink({
  name: "drink1",
  price: 60,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: true,
});
menu.addDrink({
  name: "drink2",
  price: 120,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: true,
});
menu.addDrink({
  name: "drink3",
  price: 600,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: false,
});
menu.addDish({
  name: "dish1",
  price: 120,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: true,
});
menu.addDish({
  name: "dish2",
  price: 100,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: true,
});
menu.addDish({
  name: "dish3",
  price: 300,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: true,
});
menu.addDessert({
  name: "dessert1",
  price: 80,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: true,
});
menu.addDessert({
  name: "dessert2",
  price: 100,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: false,
});
menu.addDessert({
  name: "dessert3",
  price: 90,
  ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  isRelevant: true,
});

module.exports = { menu };
