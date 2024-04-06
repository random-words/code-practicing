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
  constructor({ tableInfo, dishesList, generalPrice, status }) {
    this.tableInfo = tableInfo;
    this.dishesList = dishesList;
    this.generalPrice = generalPrice;
    this.status = status;
  }

  confirmOrder({ tableInfo, dishesOrder }) {
    this.orderAppropriation(tableInfo);
    this.dishesList.push(dishesOrder);
    this.status = this.changeOrderStatus(ORDER_STATUSES.NEW);
  }

  orderAppropriation(tableInfo) {
    if (tableInfo.status !== TABLE_STATUSES.BUSY) {
      return (tableInfo.status = TABLE_STATUSES.BUSY);
    }
    return `This table is busy right now, pick another one`;
  }

  changeOrderStatus(newStatus) {
    return (this.status = newStatus);
  }

  changeTableStatus(tableInfo, newStatus) {
    return tableInfo.status === newStatus;
  }

  getCheck(dishesList) {
    return `Here's your check: ${dishesList.reduce(
      (acc, dish) => acc + dish.price
    )}`;
  }

  getRelevantDishes({ drinks, mainDishes, desserts }) {
    return {
      relevantDrinks: drinks.filter((drink) => drink.isRelevant),
      relevantMainDishes: mainDishes.filter((dish) => dish.isRelevant),
      relevantDrinks: desserts.filter((dessert) => dessert.isRelevant),
    };
  } // поки-шо не знаю, як написати

  reverseOrder() {
    this.status = this.changeOrderStatus(ORDER_STATUSES.CLOSED);
    this.tableInfo.status = TABLE_STATUSES.AVAILABLE;
    this.dishesList = [];
  }
  reverseDishFromOrder(dishName) {
    const dish = this.dishesList.find((dish) => dish.name === dishName);
    const dishIdx = this.dishesList.findIndex((dish) => dish.name === dishName);
    if (!dish) {
      return `You dont have that dish in your order`;
    }
    return this.dishesList.splice(dishIdx, 1);
  }

  getReport() {
    // bruh
  }
}
