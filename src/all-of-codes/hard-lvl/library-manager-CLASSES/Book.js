class Book {
  constructor({ id, name, author, releaseDate, genre, status }) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.status = status;
  }
}

module.exports = { Book };
