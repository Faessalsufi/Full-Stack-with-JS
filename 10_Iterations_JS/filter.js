const musicalInstruments = [
  "guitar",
  "piano",
  "violin",
  "drums",
  "flute",
  "trumpet",
];

const values = musicalInstruments.forEach((item) => {
  //   console.log(item);
  return item;
});
// console.log(values);

//! forEach doesn't return a value

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//! filter return a value

const value = myNumbers.filter((num) => num > 6);

// with forEach
const filteredValue = [];

myNumbers.forEach((num) => {
  if (num > 6) {
    filteredValue.push(num);
  }
});

// console.log(filteredValue);

//! -----------------------------------------------------------------

// booksData

const booksData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    pages: 180,
    publicationYear: 1925,
    isBestseller: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    pages: 281,
    publicationYear: 1960,
    isBestseller: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    pages: 328,
    publicationYear: 1949,
    isBestseller: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 310,
    publicationYear: 1937,
    isBestseller: false,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    pages: 309,
    publicationYear: 1997,
    isBestseller: true,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-Age",
    pages: 224,
    publicationYear: 1951,
    isBestseller: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pages: 1178,
    publicationYear: 1954,
    isBestseller: false,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    pages: 454,
    publicationYear: 2003,
    isBestseller: true,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    pages: 311,
    publicationYear: 1932,
    isBestseller: false,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    pages: 197,
    publicationYear: 1988,
    isBestseller: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    pages: 279,
    publicationYear: 1813,
    isBestseller: false,
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    pages: 447,
    publicationYear: 1977,
    isBestseller: true,
  },
];

//?   Bestsellers:
//   How many books in the dataset are bestsellers?
//   What are the titles of the bestseller books?

//? Genres:
//   How many books are there in the Fantasy genre?
//   Can you list all the unique genres present in the dataset?

//? Authors:
//   How many books were written by J.R.R. Tolkien?
//   Are there any authors who wrote more than one book in the dataset?

//? Publication Years:
//   What is the average publication year of the books?
//   Can you list all unique publication years present in the dataset?

//? Pages:
//   What is the average number of pages for all the books?
//   Find books with more than 400 pages.

// count = 0;
// const noOfBestsellers = booksData.filter((book) => {
//   return book.isBestseller === true;
// });

// console.log(noOfBestsellers.length);

let userBooks = booksData.filter((book) => {
  return book.genre === "Fiction";
});

userBooks = booksData.filter((book) => {
  return book.publicationYear >= 1990 && book.genre == "Mystery";
});

console.log(userBooks);
