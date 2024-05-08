class Room {
  constructor({
    number,
    type,
    price,
    isAvailable = true,
    reservationDate = null,
  }) {
    this.number = number;
    this.type = type;
    this.price = price;
    this.isAvailable = isAvailable;
    this.reservationDate = reservationDate;
  }
}

module.exports = Room;
