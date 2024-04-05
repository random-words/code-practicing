class Reader {
  constructor({ id, name, bookList, bookHistory }) {
    this.id = id;
    this.name = name;
    this.bookList = bookList;
    this.bookHistory = bookHistory;
  }
}

module.exports = { Reader };
