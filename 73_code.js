class Book {
  constructor(author = "", published = "") {
    this.author = author;
    this.published = published;
  }
}

class Author {
  static books = [];
  static name = "";
  constructor(name = "") {
    this.name = name;
  }
}

class Publisher {
  static books = [];
  static authors = [];
}

class Review {
  constructor(rating = 0, user = "") {
    this.rating = rating;
    this.user = user;
  }
}
class Bookstore {
  static books = [];
  static prices = {};
}

let book = new Book();
let review = new Review();

console.log(book instanceof Book, true);
console.log(
  book.hasOwnProperty("author"),
  true,
  "The class Book needs to have a value for author."
);
console.log(
  book.hasOwnProperty("published"),
  true,
  "The class Book needs to have a value for published."
);
console.log(
  Author.hasOwnProperty("name"),
  true,
  "The class Author needs to have a value for name."
);
console.log(
  Author.hasOwnProperty("books"),
  true,
  "The class Author needs to have a value for books."
);
console.log(
  Publisher.hasOwnProperty("authors"),
  true,
  "The class Publisher needs to have a value for authors."
);
console.log(
  Publisher.hasOwnProperty("books"),
  true,
  "The class Publisher needs to have a value for books."
);
console.log(review instanceof Review, true);
console.log(
  review.hasOwnProperty("rating"),
  true,
  "The class Review needs to have a value for rating."
);
console.log(
  review.hasOwnProperty("user"),
  true,
  "The class Review needs to have a value for user."
);

if (typeof Bookstore === "undefined") {
  return null;
} else {
  console.log(
    Bookstore.hasOwnProperty("books"),
    true,
    "The class Bookstore needs to have a value for books."
  );
  console.log(
    Bookstore.hasOwnProperty("prices"),
    true,
    "The class Bookstore needs to have a value for prices."
  );
}
