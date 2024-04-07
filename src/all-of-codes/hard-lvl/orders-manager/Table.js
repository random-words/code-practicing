const TABLE_STATUSES = {
  AVAILABLE: "available",
  BUSY: "busy",
};

class Table {
  constructor({ id, number, seatsNumber, status }) {
    this.id = id;
    this.number = number;
    this.seatsNumber = seatsNumber;
    this.status = status;
  }
}

const tables = [];

for (let i = 0; i < 5; i += 1) {
  tables.push(
    new Table({
      id: i + 1,
      number: i + 1,
      seatsNumber: i + 3,
      status: TABLE_STATUSES.AVAILABLE,
    })
  );
}

module.exports = { tables };
