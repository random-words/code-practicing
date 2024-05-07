const customer = require("./all-of-code/hard-lvl/restaurant-order/Customer");
const menu = require("./all-of-code/hard-lvl/restaurant-order/Menu");

console.log(
  customer.makeRandomOrder({ dishesNumber: 5, menu: menu.dishesList })
);

console.log(customer.changeOrder({ dishesNumber: 3, menu: menu.dishesList }));
