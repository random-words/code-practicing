const STATUS = {
  AVAILABLE: "available",
  DELETED: "deleted",
  PUBLISHING: "publishing",
};

const libraryManager = {
  books: [],
  readers: [],

  addBook({ id = nanoid(4), name, author, releaseDate, genre, status }) {
    this.books.push({
      id,
      name,
      author,
      releaseDate,
      genre,
      status,
    });
  },

  registerReader({ id = nanoid(4), name, bookList = [], booksHistory = [] }) {
    this.readers.push({
      id,
      name,
      bookList,
      booksHistory,
    });
  },

  giveBookToReader({ readerId, bookId }) {
    const reader = this.readers.find((reader) => reader.id === readerId);
    const book = this.books.find((book) => book.id === bookId);
    if (reader.bookList.length < 3 && book.status !== STATUS.DELETED) {
      reader.bookList.push(book);
      reader.booksHistory.push(book);
      return `${reader.name}, here's your book`;
    }
    if (reader.bookList.length >= 3) {
      return `${reader.name}, you have reached your book limit`;
    }
    return `${reader.name}, you cannot have this book`;
  },

  returnBook({ readerId, bookId }) {
    const reader = this.readers.find((reader) => reader.id === readerId);
    const book = this.books.find((book) => book.id === bookId);
    if (reader.bookList.includes(book)) {
      reader.bookList.splice(reader.bookList.indexOf(book), 1);
      return `Thank you ${reader.name}, come again!`;
    }
    return `${reader.name}, you don't have this book`;
  },

  updateBookStatus(id, newStatus) {
    this.books.find((book) => book.id === id).status = newStatus;
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

    return this.readers.filter(
      (reader) => reader.booksHistory.length === maxLength
    );
  },

  giveReport() {
    return {
      // mostPopularGenre: getBooksByMostPopularGenre(),
      mostBooksReadReaders: this.getReadersWithMostBooksRead(),
    };
  },
};

libraryManager.addBook({
  id: 1,
  name: "history",
  author: "Juan",
  releaseDate: 1976,
  genre: "historical",
  status: STATUS.AVAILABLE,
});
libraryManager.addBook({
  id: 2,
  name: "math",
  author: "Tomm",
  releaseDate: 1988,
  genre: "science",
  status: STATUS.PUBLISHING,
});
libraryManager.addBook({
  id: 3,
  name: "chemistry",
  author: "Connor",
  releaseDate: 1980,
  genre: "science",
  status: STATUS.AVAILABLE,
});
libraryManager.addBook({
  id: 4,
  name: "physic",
  author: "Mango",
  releaseDate: 2000,
  genre: "science",
  status: STATUS.AVAILABLE,
});
libraryManager.addBook({
  id: 5,
  name: "language",
  author: "Juan",
  releaseDate: 2005,
  genre: "literature",
  status: STATUS.DELETED,
});

////////////////////////

libraryManager.registerReader({
  id: 1,
  name: "Ajax",
  bookList: [
    {
      name: "physic",
      author: "Mango",
      releaseDate: 2000,
      genre: "science",
      status: STATUS.AVAILABLE,
    },
    {
      name: "chemistry",
      author: "Connor",
      releaseDate: 1980,
      genre: "science",
      status: STATUS.AVAILABLE,
    },
    {
      name: "math",
      author: "Tomm",
      releaseDate: 1988,
      genre: "science",
      status: STATUS.PUBLISHING,
    },
  ],
  booksHistory: [],
});

libraryManager.registerReader({
  id: 2,
  name: "Poly",
  bookList: [
    {
      name: "history",
      author: "Juan",
      releaseDate: 1976,
      genre: "historical",
      status: STATUS.AVAILABLE,
    },
  ],
  booksHistory: [],
});

libraryManager.registerReader({
  id: 3,
  name: "Casey",
  bookList: [
    {
      name: "language",
      author: "Juan",
      releaseDate: 2005,
      genre: "literature",
      status: STATUS.DELETED,
    },
    {
      name: "math",
      author: "Tomm",
      releaseDate: 1988,
      genre: "science",
      status: STATUS.PUBLISHING,
    },
  ],
  booksHistory: [
    {
      name: "math",
      author: "Tomm",
      releaseDate: 1988,
      genre: "science",
      status: STATUS.PUBLISHING,
    },
    {
      name: "chemistry",
      author: "Connor",
      releaseDate: 1980,
      genre: "science",
      status: STATUS.AVAILABLE,
    },
    {
      name: "physic",
      author: "Mango",
      releaseDate: 2000,
      genre: "science",
      status: STATUS.AVAILABLE,
    },
    {
      name: "language",
      author: "Juan",
      releaseDate: 2005,
      genre: "literature",
      status: STATUS.DELETED,
    },
  ],
});

/////////////////////////

console.log(libraryManager.giveBookToReader({ readerId: 1, bookId: 1 }));
console.log(libraryManager.giveBookToReader({ readerId: 2, bookId: 1 }));
console.log(libraryManager.giveBookToReader({ readerId: 3, bookId: 5 }));

/////////////////////////

console.log(libraryManager.returnBook({ readerId: 2, bookId: 1 }));
console.log(libraryManager.returnBook({ readerId: 1, bookId: 1 }));

/////////////////////////

console.log(libraryManager.updateBookStatus(1, STATUS.DELETED));

/////////////////////////

console.log(libraryManager.scearchBooksByAuthor("Mango"));
console.log(libraryManager.scearchBooksByGenre("science"));
console.log(libraryManager.scearchBooksByStatus(STATUS.DELETED));

/////////////////////////

console.log(libraryManager.giveReport());
