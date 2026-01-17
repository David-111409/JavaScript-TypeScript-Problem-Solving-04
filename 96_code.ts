// // FILL IN THE GENERICS AND TYPES BELOW

// interface Users {
//   id: number;
//   name: string;
//   age: number;
// }
// function transformData(
//   items: Users[],
//   key: "age" | "id",
//   callback: (val: number) => number
// ) {
//   return items.map((item) => ({
//     ...item,
//     [key]: callback(item[key]),
//   }));
// }

// // --- TEST CASE ---
// const users = [
//   { id: 1, name: "Alice", age: 30 },
//   { id: 2, name: "Bob", age: 25 },
// ];

// // This should work:
// const updatedUsers = transformData(users, "age", (val) => val + 1);

// // This should THROW a TypeScript error because "salary" doesn't exist:
// // transformData(users, "salary", (val) => val);

// // This should THROW a TypeScript error because "val" is a string, not a number:
// // transformData(users, "name", (val) => val.toFixed(2));

// // 1. Create your interface here
// interface CartItem {
//   // ...
//   name: string;
//   price: number;
//   quantity: number;
// }

// // 2. Write the function here
// function calculateTotal(items: CartItem[]): number {
//   // Your logic here
//   let total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   return total;
// }

// // 3. Test it
// const myCart: CartItem[] = [
//   { name: "Apples", price: 1.5, quantity: 4 },
//   { name: "Bread", price: 2.0, quantity: 1 },
//   { name: "Milk", price: 3.5, quantity: 2 },
// ];

// const total = calculateTotal(myCart);
// console.log(total); // Should output 15

// 1. Define your types here
// type Priority = "high" | "low" | "medium";

// interface Task {
//   id: number;
//   title: string;
//   completed: boolean;
//   priority: Priority;
// }

// // 2. Write the function
// function getUrgentTasks(tasks: Task[]): Task[] {
//   let urgent = tasks.filter(
//     ({ priority, completed }) => !completed && priority === "high"
//   );
//   return urgent;
// }
// const getTaskLabels = (tasks: Task[]): string[] => {
//   return tasks.map(
//     (item) => `ID: ${item.id} - ${item.title} ${item.priority.toUpperCase()}`
//   );
// };
// // 3. Test Case
// const myTasks: Task[] = [
//   { id: 1, title: "Fix bug", completed: false, priority: "high" },
//   { id: 2, title: "Update docs", completed: true, priority: "high" },
//   { id: 3, title: "Check email", completed: false, priority: "low" },
// ];

// const urgent = getUrgentTasks(myTasks);
// console.log(urgent); // Should only show the "Fix bug" task

class User {
  id: number;
  name: string;
  add: string;
  city?: string;
  constructor(
    id: number,
    name: string,
    add: string,
    city: string
    // public id: number = 0,
    // public name: string = "",
    // public add: string = ""
  ) {
    this.id = id;
    this.name = name;
    this.add = add;
    this.city = city;
  }
}
const one = new User(1, "Khaled", "Egypt", "Riy");
