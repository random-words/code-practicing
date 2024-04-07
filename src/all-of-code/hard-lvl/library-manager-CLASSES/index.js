const {
  Book,
} = require("./all-of-codes/hard-lvl/library-manager-CLASSES/Book");
const {
  libraryManager,
} = require("./all-of-codes/hard-lvl/library-manager-CLASSES/LibraryManager");
const {
  Reader,
} = require("./all-of-codes/hard-lvl/library-manager-CLASSES/Reader");

const STATUS = {
  AVAILABLE: "available",
  DELETED: "deleted",
  PUBLISHING: "publishing",
};

for (let i = 0; i < 3; i += 1) {
  const reader = new Reader({
    id: i + 1,
    name: `name${i + 1}`,
    bookList: [],
    bookHistory: [],
  });
  libraryManager.registerReader(reader);
}

for (let i = 0; i < 5; i += 1) {
  const book = new Book({
    id: i + 1,
    name: `bookName${i + 1}`,
    author: `author${i + 1}`,
    releaseDate: 1001 + i,
    genre: `genre${i + 1}`,
    status: STATUS.AVAILABLE,
  });
  libraryManager.addBook(book);
}

// console.log("BOOKS: ", libraryManager.books);
// console.log("READERS: ", libraryManager.readers);

console.log(libraryManager.removeBook(1));

console.log(libraryManager.giveReaderBook({ readerId: 1, bookId: 2 }));
console.log(libraryManager.giveReaderBook({ readerId: 1, bookId: 2 }));
console.log(libraryManager.giveReaderBook({ readerId: 1, bookId: 3 }));
console.log(libraryManager.giveReaderBook({ readerId: 1, bookId: 4 }));
console.log(libraryManager.giveReaderBook({ readerId: 1, bookId: 5 }));

console.log(libraryManager.removeBookFromReader({ readerId: 1, bookId: 2 }));
console.log(libraryManager.removeBookFromReader({ readerId: 1, bookId: 2 }));

console.log(
  "undefined, because no return: ",
  libraryManager.updateBookStatus(2, STATUS.DELETED)
);

console.log(libraryManager.searchBookByAuthor("author2"));
console.log(libraryManager.searchBookByGenre("genre1"));
console.log(libraryManager.searchBookByStatus(STATUS.DELETED));

console.log(libraryManager.getReport());
