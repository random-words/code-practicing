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

class Order {
  constructor({ table, dishesList, generalPrice, status }) {
    this.table = table;
    this.dishesList = dishesList;
    // this.generalPrice = generalPrice;
    this.status = status;
  }

  confirmOrder({ table, dishesList }) {
    this.status = this.changeOrderStatus(ORDER_STATUSES.NEW);
    return this.orderAppropriation(table, dishesList);
  }

  orderAppropriation(table, dishesList) {
    if (table.status !== TABLE_STATUSES.BUSY) {
      this.table = table;
      table.status = this.changeTableStatus(table, TABLE_STATUSES.BUSY);
      this.takeOrderFromClient(dishesList);
      return;
    }
    return `This table is busy right now, pick another one`;
  }

  takeOrderFromClient(dishesList) {
    const onlyReliableDishes = dishesList.filter((dish) => dish.isRelevant);
    this.dishesList.push(...onlyReliableDishes);
  }

  changeOrderStatus(newStatus) {
    return (this.status = newStatus);
  }

  changeTableStatus(table, newStatus) {
    return (table.status = newStatus);
  }

  getAvailableTables(tables) {
    return tables.filter((table) => table.status === TABLE_STATUSES.AVAILABLE);
  } // в душі не парю, як зробити бектрекінг, шоби узнати масив цих столів

  getCheck(dishesList) {
    const price = dishesList.reduce((acc, dish) => acc + dish.price, 0);
    return `Here's your check: ${price}`;
  }

  getRelevantDishes({ drinks, dishes, desserts }) {
    const relevantDrinks = drinks.filter((drink) => drink.isRelevant);
    const relevantDishes = dishes.filter((dish) => dish.isRelevant);
    const relevantDesserts = desserts.filter((dessert) => dessert.isRelevant);
    return {
      relevantDrinks,
      relevantDishes,
      relevantDesserts,
    };
  }

  reverseOrder(table) {
    this.status = this.changeOrderStatus(ORDER_STATUSES.CLOSED);
    this.table.status = this.changeTableStatus(table, TABLE_STATUSES.AVAILABLE);
    this.dishesList = [];
    return `oki-doki`;
  }

  reverseDishFromOrder(dishName) {
    const dish = this.dishesList.find((dish) => dish.name === dishName);
    const dishIdx = this.dishesList.findIndex((dish) => dish.name === dishName);
    if (!dish) {
      return `You dont have that dish in your order`;
    }
    return this.dishesList.splice(dishIdx, 1);
  } // в душі не парю, чого воно некорректно робить (на вигляд, всьо правильно...)

  getReport() {
    return "bruh";
  }
}

const order = new Order({
  table: {},
  dishesList: [],
  status: ORDER_STATUSES.NEW,
});

module.exports = { order };
