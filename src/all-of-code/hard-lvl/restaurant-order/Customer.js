class Customer {
  makeRandomOrder({ dishesNumber, overallDishesInOrder = [], menu }) {
    for (let i = 0; i < dishesNumber; i += 1) {
      const randomMenuIdx = Math.floor(Math.random() * menu.length);
      overallDishesInOrder.push(menu[randomMenuIdx]);
    }
    return overallDishesInOrder;
  }

  changeOrder({ dishesNumber, menu }) {
    // туй треба, шоб воно кількість страв змінило і просто заюзало верхній метод?.. виходить...
    return this.makeRandomOrder({ dishesNumber, menu });
  }
}

const customer = new Customer();

module.exports = customer;
