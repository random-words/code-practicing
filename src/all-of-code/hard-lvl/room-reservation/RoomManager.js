const Room = require("./Room");

class RoomManager {
  constructor({ rooms = [] }) {
    this.rooms = rooms;
  }

  addRoom(roomInfo) {
    this.rooms.push(roomInfo);
  }

  deleteRoomByNumber(number) {
    const roomIdx = this.rooms.find((room) => room.number === number);
    return this.rooms.splice(roomIdx, 1);
  }

  reserveRoom(number, dateToReserve) {
    const room = this.rooms.find((room) => room.number === number);
    if (!room) {
      return `enter the information correctly`;
    }
    if (!room.isAvailable) {
      return `this room is already reserved`;
    }
    room.isAvailable = false;
    room.reservationDate = dateToReserve;
    return `the room is yours!`;
  }

  changeReservationDate(roomNumber, dateToReserve) {
    const room = this.rooms.find((room) => room.number === roomNumber);
    if (!room) {
      return `enter the information correctly`;
    }
    if (room.isAvailable) {
      return `you don't reserve this room`;
    }
    room.reservationDate = dateToReserve;
    return `successful change!`;
  }

  cancelReservation(roomNumber) {
    const room = this.rooms.find((room) => room.number === roomNumber);
    if (!room) {
      return `enter the information correctly`;
    }
    if (room.isAvailable) {
      return `you don't reserve this room`;
    }
    room.isAvailable = true;
    room.reservationDate = null;
    return `you've cancelled reservation`;
  }

  checkRoomsAvailabilityByDate(date) {
    return this.rooms.filter((room) => room.reservationDate === date);
  }

  checkRoomsAvailability() {
    const availableRooms = this.rooms
      .filter((room) => room.isAvailable)
      .map((room) => {
        const { number, type, price } = room;
        return { number, type, price };
      });
    const nonAvailableRooms = this.rooms
      .filter((room) => !room.isAvailable)
      .map((room) => {
        const { number, type, reservationDate } = room;
        return { number, type, reservationDate };
      });

    return {
      availableRooms,
      nonAvailableRooms,
    };
  }
}

const roomManager = new RoomManager({ rooms: [] });

for (let i = 0; i < 10; i += 1) {
  roomManager.addRoom(
    new Room({
      number: i + 1,
      type: "default",
      price: 100,
      isAvailable: true,
      reservationDate: null,
    })
  );
}
for (let i = 0; i < 10; i += 1) {
  roomManager.addRoom(
    new Room({
      number: i + 11,
      type: "luxe",
      price: 1000,
      isAvailable: false,
      reservationDate: Math.floor(100000 + Math.random() * 900000),
    })
  );
}

module.exports = roomManager;
