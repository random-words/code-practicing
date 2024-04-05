class Order {
  constructor({ tableInfo, dishesList, generalPrice, status }) {
    this.tableInfo = tableInfo;
    this.dishesList = dishesList;
    this.generalPrice = generalPrice;
    this.status = status;
  }

  // pickTable - метод, який викликається із класу Table

  // dishesOrder - метод, який має взяти страви із масивів
  // класу Menu і запхнути в свій масив
  confirmOrder({ dishesOrder, pickTable }) {}

  orderAppropriation() {}

  changeOrderStatus() {}
}
