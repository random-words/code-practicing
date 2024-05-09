const Dish = require("./all-of-code/hard-lvl/food-delivery/Dish");
const Menu = require("./all-of-code/hard-lvl/food-delivery/Menu");
const orderer = require("./all-of-code/hard-lvl/food-delivery/Orderer");
const Restaurant = require("./all-of-code/hard-lvl/food-delivery/Restaurant");

const restaurants = [];

for (let i = 0; i < 3; i += 1) {
  restaurants.push(new Restaurant({ name: `restaurant${i + 1}` }));
}

for (const restaurant of restaurants) {
  restaurant.createMenu(new Menu({ dishes: [] }));
}

for (const restaurant of restaurants) {
  for (let i = 0; i < 10; i += 1) {
    restaurant.addDish(
      new Dish({
        name: `dish${i + 1} from restaurant: ${restaurant.name}`,
        price: 100 * (i + 1),
        desc: `desc${i + 10}`,
        isDelivered: false,
      })
    );
  }
}

orderer.makeOrder(restaurants);
console.log(restaurants[0].menu.dishes);
console.log(restaurants[1].menu.dishes);
console.log(restaurants[2].menu.dishes);
