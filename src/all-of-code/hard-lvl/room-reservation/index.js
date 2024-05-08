const roomManager = require("./all-of-code/hard-lvl/room-reservation/RoomManager");

console.log(roomManager.changeReservationDate(1, 100000));
console.log(roomManager.changeReservationDate(undefined, 100000));
console.log(roomManager.changeReservationDate(11, 100000));

console.log(roomManager.cancelReservation(1));
// console.log(roomManager.cancelReservation(11));
console.log(roomManager.changeReservationDate(11, 100000));

console.log(roomManager.reserveRoom(1, 101010));
console.log(roomManager.reserveRoom(1, 101010));
console.log(roomManager.reserveRoom(0, 101010));

console.log(roomManager.checkRoomsAvailabilityByDate(101010));
console.log(roomManager.checkRoomsAvailabilityByDate(100000));

console.log(roomManager.checkRoomsAvailability());
