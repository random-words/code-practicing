const STATUS = {
  AVAILABLE: "available",
  DELETED: "deleted",
  PUBLISHING: "publishing",
};

class LibraryManager {
  constructor({ books, readers }) {
    this.books = books;
    this.readers = readers;
  }

  addBook({ id, name, author, releaseDate, genre, status }) {
    this.books.push({ id, name, author, releaseDate, genre, status });
  }

  removeBook(bookId) {
    const book = this.books.find((book) => book.id === bookId);
    const bookIdx = this.books.findIndex((book) => book.id === bookId);
    if (this.books.includes(book)) {
      return this.books.splice(bookIdx, 1);
    }
    return `We don't have this book`;
  }

  registerReader({ id, name, bookList, bookHistory }) {
    this.readers.push({ id, name, bookList, bookHistory });
  }

  giveReaderABook({ readerId, bookId }) {
    const reader = this.readers.find((reader) => reader.id === readerId);
    const book = this.books.find((book) => book.id === bookId);
    const { bookList, bookHistory } = reader;
    if (bookList.find((book) => book.id === bookId)) {
      return `${reader.name}, you already have this book`;
    }
    if (bookList.length < 3 && book.status !== STATUS.DELETED) {
      bookList.push(book);
      bookHistory.push(book);
      return `${reader.name}, here's your book`;
    }
    if (bookList.length >= 3) {
      return `${reader.name}, you reached your book limit`;
    }
    return `${reader.name}, you cannot have this book`;
  }

  comebackBook({ readerId, bookId }) {
    const reader = this.readers.find((reader) => reader.id === readerId);
    const book = this.books.find((book) => book.id === bookId);
    const bookIdx = this.books.findIndex((book) => book.id === bookId);
    const { bookList } = reader;
    if (bookList.includes(book)) {
      bookList.splice(bookIdx, 1);
      return `Thank you ${reader.name}, come again!`;
    }
    return `${reader.name}, you don't have this book`;
  }

  updateBookStatus(bookId, newStatus) {
    this.books.find((book) => book.id === bookId).status = newStatus;
  }

  searchBookByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }
  searchBookByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }
  searchBookByStatus(status) {
    return this.books.filter((book) => book.status === status);
  }

  getReport() {
    return `that is report... yes...`;
  }
}

const libraryManager = new LibraryManager({ books: [], readers: [] });

module.exports = { libraryManager };
