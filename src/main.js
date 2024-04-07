const { menu } = require("./all-of-codes/hard-lvl/orders-manager/Menu");
const { order } = require("./all-of-codes/hard-lvl/orders-manager/Order");
const { tables } = require("./all-of-codes/hard-lvl/orders-manager/Table");

const TABLE_STATUSES = {
  AVAILABLE: "available",
  BUSY: "busy",
};

const ORDER_STATUSES = {
  NEW: "new",
  IN_PROCESS: "in process",
  READY: "ready",
  CLOSED: "closed",
};

console.log(menu.removeDessert("dessert4"));
console.log(menu.removeDish("dessert4"));
console.log(menu.removeDrink("dessert4"));
console.log(menu.removeDrink("drink1"));
console.log(menu.drinks);

console.log(
  order.confirmOrder({
    table: {
      id: 1,
      number: 1,
      seatsNumber: 3,
      status: TABLE_STATUSES.BUSY,
    },
    dishesList: [
      menu.drinks[0],
      menu.drinks[1],
      menu.desserts[1],
      menu.dishes[2],
    ],
  })
);

// console.log(order);

order.confirmOrder({
  table: {
    id: 1,
    number: 1,
    seatsNumber: 3,
    status: TABLE_STATUSES.AVAILABLE,
  },
  dishesList: [
    menu.drinks[0],
    menu.drinks[1],
    menu.desserts[1],
    menu.dishes[2],
  ],
});

console.log(order);

console.log(order.changeOrderStatus(ORDER_STATUSES.IN_PROCESS));

console.log(order.getCheck(order.dishesList));

console.log(
  order.getRelevantDishes({
    drinks: menu.drinks,
    dishes: menu.dishes,
    desserts: menu.desserts,
  })
);

console.log(
  order.reverseOrder({
    id: 1,
    number: 1,
    seatsNumber: 3,
    status: TABLE_STATUSES.AVAILABLE,
  })
);

// console.log(order);

// в душі не парю, чого воно некорректно робить
console.log(order.reverseDishFromOrder("drink2"));

console.log(order.getReport());
