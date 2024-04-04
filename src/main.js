const { nanoid } = require("nanoid");

const STATUS = {
  AVAILABLE: "available",
  DELETED: "deleted",
  PUBLISHING: "publishing",
};

const libraryManager = {
  books: [],
  readers: [],

  addBook({ name, author, releaseDate, genre, status }) {
    this.books.push({
      id: nanoid(4),
      name,
      author,
      releaseDate,
      genre,
      status,
    });
  },

  registerReader({ name, bookList: [], booksHistory: [] }) {
    this.readers.push({
      id: nanoid(4),
      name,
      bookList: [],
      booksHistory: [],
    });
  },

  giveBookToReader({ readerId, bookId }) {
    const reader = this.readers.find((reader) => reader.id === readerId);
    if (reader.bookList.length <= 3) {
      reader.bookList.push(this.books.find((book) => book.id === bookId));
      reader.booksHistory.push(this.books.find((book) => book.id === bookId));
      return;
    }
    return `${reader.name}, you have reached your book limit`;
  },

  returnBook({ readerId, bookId }) {
    const reader = this.readers.find((reader) => reader.id === readerId);
    const book = this.books.find((book) => book.id === bookId);
    if (reader.bookList.find(book)) {
      reader.bookList.splice(indexOf(book), 1);
      return;
    }
    return `${reader.name}, you don't have this book`;
  },

  updateBookStatus(id, newStatus) {
    return (this.books.find((book) => book.id === id).status = newStatus);
  },

  scearchBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  },

  scearchBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  },

  scearchBooksByStatus(status) {
    return this.books.filter((book) => book.status === status);
  },

  //   getBooksByMostPopularGenre(){
  //     return this.books.filter(book => )
  //   }

  /**
   * дддддддддддддддааааааааааааааа....
   *
   * реалізація в голові:
   *
   * створити об'єкт із ключом "жанр" і
   * значенням число - кількість повторювань цього жанру в колекції
   *
   * потім звіритися, який жанр має найбільшу кількість повторювань і
   * вивести цей жанр
   */

  getReadersWithMostBooksRead() {
    let maxLength = 0;
    for (const reader of this.readers) {
      if (reader.booksHistory.length > maxLength) {
        maxLength = reader.booksHistory.length;
      }
    }

    return this.readers.filter((reader) => {
      reader.booksHistory.length === maxLength;
    });
  },

  giveReport() {
    // getBooksByMostPopularGenre()
    this.getReadersWithMostBooksRead();
  },
};
