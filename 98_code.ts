type Book = {
  title: string;
  author: string;
  isAvailable: boolean;
};

class Library {
  private books: Book[] = [];

  addBook(title: string, author: string): void {
    this.books.push({ title, author, isAvailable: true });
  }

  borrowBook(title: string): void {
    let found = this.books.find((book) => book.title === title);
    if (!found) {
      throw new Error("Book is not found");
    }

    const { isAvailable } = found;
    if (!isAvailable) {
      throw new Error("The book is already out");
    }
    found.isAvailable = false;
  }

  returnBook(returnTitle: string): void {
    const found = this.books.find(
      ({ title, isAvailable }) => !isAvailable && title === returnTitle
    );
    if (found) {
      found.isAvailable = true;
    }
  }

  listAvailableBooks(): string[] {
    return this.books.reduce((titles, { isAvailable, title }) => {
      if (isAvailable) titles.push(title);
      return titles;
    }, [] as string[]);
  }
}

// const myLibrary = new Library();
// myLibrary.addBook("book 1", "dawoud");
// myLibrary.addBook("book 2", "khaled");
// myLibrary.addBook("book 3", "hager");
// // myLibrary.borrowBook("book 2");
// // myLibrary.borrowBook("book 4");
// try {
//   myLibrary.borrowBook("book 1");
//   //   myLibrary.borrowBook("book 5");
//   //   myLibrary.borrowBook("book 3");
//   //   myLibrary.returnBook("book 2");
//   //   myLibrary.borrowBook("book 2");
//   console.log(myLibrary.listAvailableBooks());
// } catch (error) {
//   console.log(error);
// }

const myLibrary = new Library();

myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald");
myLibrary.addBook("1984", "George Orwell");
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien");

console.log(myLibrary.listAvailableBooks());
// Expected: ["The Great Gatsby", "1984", "The Hobbit"]
myLibrary.borrowBook("1984");
console.log(myLibrary.listAvailableBooks());
// Expected: ["The Great Gatsby", "The Hobbit"]
myLibrary.borrowBook("The Great Gatsby");

// Test Error Handling
try {
  console.log(myLibrary.listAvailableBooks());
  myLibrary.borrowBook("The Hobbit"); // Should throw error
  myLibrary.returnBook("1984");
  console.log(myLibrary.listAvailableBooks());
} catch (e) {
  if (e instanceof Error) console.log(e.message); // Expected: "Book is already out"
}

/*
// const ar: readonly number[] = [1, 2, 3];
// ar.push("hellos");
// ar.push(4);

// console.log(ar);

// let tuple: readonly [string, number, boolean];

// tuple = ["hello", 2, true];
// tuple[0] = "dawoud";

// console.log(tuple);

// const ar: [x: number, y: number] = [2, 3];

// // const tup: [number, number] = [2, 3];

// console.log(ar[0], ar[1]);

// const ar: readonly [value: string, setValue: () => void] = ["hello", () => {}];

// console.log(ar);

// const obj: { [key: string]: string } = {};

// obj.name = "Dawoud";

// console.log(obj);

// let tupe: readonly [x: number, y: number];

// tupe = [2, 3];
// let [x, y] = tupe;
// tupe[0] = 4;
// tupe[1] = 5;
// console.log(tupe, x, y);

// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// let currentDirection: CardinalDirections = CardinalDirections.North;
// // logs 0
// console.log(currentDirection);
// // throws error as 'North' is not a valid enum
// currentDirection = CardinalDirections.South; // Error: "North" is not assignable to type 'CardinalDirections'.

interface Animal {
  name: string;
}

// interface Animals extends Animal {
//   age: number;
// }
interface Animal {
  age: number;
}

const dog: Animal = {
  name: "dog 1",
  age: 22,
};

console.log(dog);

// type Negate = (value: number) => number;
// const negate: Negate = (value) => value * -1;

// const negate = (value: number): number => value * -1;
// console.log(negate(20));

// let x: unknown;
// x = "10f";
// console.log((x as string).length);

// let x: unknown;
// x = "1002";

// console.log((<string>x).length);
// x = 20;

// console.log((x as unknown as string).length);

function sum(a: any, b: any) {
  console.log(((a as number) + b) as number);
}

sum(2, "3");

// // const ar = [7, 3, 9, -1, 2, 4, -100];

// // // const n = ar.length;

// // // for (let i = 0; i < n - 1; i++) {
// // //   let s = false;
// // //   for (let j = 0; j < n - i - 1; j++) {
// // //     if (ar[j] > ar[j + 1]) {
// // //       [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
// // //       s = true;
// // //     }
// // //   }
// // //   if (!s) break;
// // // }

// // // console.log(ar);

// // // const n = ar.length;
// // // for (let i = 0; i < n - 1; i++) {
// // //   let swap = false;
// // //   for (let j = 0; j < n - i - 1; j++) {
// // //     if (ar[j] > ar[j + 1]) {
// // //       [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
// // //       swap = true;
// // //     }
// // //   }
// // //   if (!swap) break;
// // // }

// // // console.log(ar);

// // const n = ar.length;
// // for (let i = 0; i < n - 1; i++) {
// //   let swap = false;
// //   for (let j = 0; j < n - i - 1; j++) {
// //     console.log(ar);
// //     if (ar[j] > ar[j + 1]) {
// //       [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
// //       swap = true;
// //     }
// //   }
// //   if (!swap) break;
// // }

// // console.log(ar);

// // 5
// // 70 90 60 85 75
const ar = [70, 90, 100, 60, 85, 75];

// let n = ar.length;
// let swap = 0;

// for (let i = 0; i < n - 1; i++) {
//   let t = false;
//   console.log(ar);
//   for (let j = 0; j < n - i - 1; j++) {
//     if (ar[j] > ar[j + 1]) {
//       [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
//       swap++;
//       t = true;
//     }
//   }
//   if (!t) break;
// }

// console.log(ar, swap);
// console.log(ar[0]); // smallest
// console.log(ar[n - 1]); // largest

function bubbleSort(ar: number[]): { swaps: number; comparisons: number } {
  let n = ar.length;
  let swaps = 0;
  let comparisons = 0;

  for (let i = 0; i < n - 1; i++) {
    let t = false;
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      if (ar[j] < ar[j + 1]) {
        [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
        t = true;
        swaps++;
      }
    }
    if (!t) break;
  }
  return { swaps, comparisons };
}

console.log(bubbleSort(ar));
console.log(ar);

// n ** 2 is the number of comparisons
*/
