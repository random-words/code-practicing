class Orderer {
  makeOrder(restaurants) {
    const restaurant = this.pickRandonRestaurant(restaurants);
    this.makeRandomOrder(restaurant);
  }

  pickRandonRestaurant(restaurants) {
    const restaurantIdx = Math.floor(Math.random() * restaurants.length);
    return restaurants[restaurantIdx];
  }

  makeRandomOrder(restaurant) {
    const dishIdx = Math.floor(Math.random() * restaurant.menu.dishes.length);
    return restaurant.makeOrder(restaurant.menu.dishes[dishIdx]);
  }
}

const orderer = new Orderer();

module.exports = orderer;
