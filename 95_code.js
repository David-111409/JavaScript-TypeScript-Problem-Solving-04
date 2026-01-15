// function showAge() {
//   this.age = 0;
//   let objThis = this;
//   setInterval(function () {
//     objThis.age++;
//     console.log(objThis.age);
//   }, 2000);
// }
// showAge();
// console.log("Hello");

function showAge() {
  this.age = 0;

  setInterval(() => {
    console.log(this.age++);
  }, 2000);
}

// showAge();

// enum Status {
//   success,
//   fail,
//   pending,
// }
// function showStatus(status: Status): string {
//   if (status === Status.success) return "Good Success";
//   else if (status === Status.fail) return "Try Again";
//   return "Wait It is pending";
// }

// const ex = showStatus(Status.success);
// const ex2 = showStatus(Status.fail);

// console.log(ex2);

// console.log(Status.fail);
// type User = {
//   id: number;
//   name: string;
//   isAdmin: boolean;
// };

// interface User {
//   id: number;
//   name: string;
//   isAdmin: boolean;
// }
// const user: User = {
//   id: 1,
//   name: "Ali",
//   isAdmin: true,
// };

// console.log(user.id, user.name, user.isAdmin);
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   tags: string[];
//   inStock: boolean;
//   discount: number | null;
//   rating: number;
// }

// const product: Product = {
//   id: 101,
//   title: "MacBook Air",
//   price: 1299,
//   tags: ["laptop", "apple", "m2"],
//   inStock: true,
//   discount: null,
//   rating: 4.8,
// };

// console.log(product.id, product.title, product.tags);

// type User = {
//   id: number;
//   name: string;
//   role: "admin" | "user";
//   isActive: boolean;
// };

// function filterActiveAdmin(ar: User[]): User[] {
//   return ar.filter((u) => u.isActive && u.role === "admin");
// }
// const a = true;
// console.log(a.valueOf());

// let b: number = 10;
// b = "10"; // error
// console.log(b.valueOf());

class Account {
  id: number;
  balance: number;
  name: string;
  constructor(id: number, balance: number, name: string) {
    this.id = id;
    this.balance = balance;
    this.name = name;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Give a positive amount");
    this.balance += amount;
  }
}

// let ac1 = new Account(1, 200, "Dawoud");
// ac1.deposit(-200);
// console.log(ac1);

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number; // how many units the user wants
};

const calculateCartTotal = (items: Product[]): number => {
  //   let total = 0;
  //   for (let item of items) {
  //     total += item.price * item.quantity;
  //   }
  //   return total;

  let total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return total;
};

const addProduct = (items: Product[], newProduct: Product): Product[] => {
  // let found = items.find(item => newProduct.id === item.id )
  // if (!found){
  //     return [...items, newProduct];
  // }
  // return items.map(item => {
  //     if (item.id === newProduct.id){
  //         return {...item, quantity: item.quantity + newProduct.quantity}
  //     }
  //     return item;
  // })
  let found = false;
  let newItems = items.map((item) => {
    if (item.id === newProduct.id) {
      found = true;
      return { ...item, quantity: item.quantity + newProduct.quantity };
    }
    return item;
  });
  if (!found) {
    // newItems.push(newProduct);
    return [...newItems, newProduct];
  }
  return newItems;
};

const getExpensiveProducts = (
  items: Product[],
  minPrice: number
): Product[] => {
  return items.filter((item) => item.price >= minPrice);
};
