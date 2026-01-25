class User {
  //   name?: string;
  private static _count: number = 0;
  constructor(public readonly id: number, public name: string) {
    // this.name = name;
    User._count++;
  }
  static get count(): number {
    return User._count;
  }
}

class Student extends User {
  constructor(id: number, name: string, public school: string) {
    super(id, name);
  }
}
const user1 = new User(2, "hager");
const stu1 = new Student(3, "Khaled", "Mohsen");
const stu2 = new Student(4, "Khaled", "Mohsen school");

// console.log(user1.name, user1.id);

console.log(stu1.id, stu1.name, stu1.school);
console.log(User.count);


class Vehicle {
  private _isRented: boolean = false;

  constructor(
    public readonly id: string,
    public model: string,
    protected price: number
  ) {}

  get isRented(): boolean {
    return this._isRented;
  }

  set isRented(value: boolean) {
    this._isRented = value;
  }
  calculatePrice(days: number): number {
    return days * this.price;
  }
}

class Car extends Vehicle {}

class Truck extends Vehicle {
  constructor(
    id: string,
    model: string,
    price: number,
    public cargoWeight: number
  ) {
    super(id, model, price);
  }

  override calculatePrice(days: number): number {
    return super.calculatePrice(days) + 50;
  }
}

class RentalManager {
  static vehicles = new Map<string, Vehicle>();
  static totalRevenue: number = 0;

  static addVehicle(vehicle: Vehicle): void {
    RentalManager.vehicles.set(vehicle.id, vehicle);
  }

  static rentVehicle(id: string, days: number): void {
    let found: undefined | Vehicle = RentalManager.vehicles.get(id);

    if (!found) throw new Error("Vehicle not found");
    if (found.isRented) throw new Error("Vehicle is currently busy");

    RentalManager.totalRevenue += found.calculatePrice(days);
    found.isRented = true;
  }

  static returnVehicle(id: string): void {
    let found = RentalManager.vehicles.get(id);
    if (found) found.isRented = false;
  }
}

// 1. Setup the Fleet
const car = new Car("c-101", "Tesla", 100);
const truck = new Truck("t-202", "CyberTruck", 150, 3000);

RentalManager.addVehicle(car);
RentalManager.addVehicle(truck);

// 2. Test Revenue Aggregation
RentalManager.rentVehicle("c-101", 2); // 100 * 2 = 200
RentalManager.rentVehicle("t-202", 1); // 150 * 1 + 50 (fee) = 200

console.log(RentalManager.totalRevenue); // Expected: 400

// 3. Test State Persistence
// Because objects are passed by reference, changing the state in the
// manager MUST change the actual object.
console.log(car.isRented); // Expected: true

// 4. Test Error Interruption
try {
  RentalManager.rentVehicle("c-101", 5); // Should fail: Already rented
} catch (e) {
  if (e instanceof Error) console.log(e.message);
}

// 5. Test Return Logic
RentalManager.returnVehicle("c-101");
console.log(car.isRented); // Expected: false
// const car = new Car("c-101", "Tesla", 100);
// const truck = new Truck("t-202", "CyberTruck", 150, 3000);

// RentalManager.addVehicle(car);
// RentalManager.addVehicle(truck);

// const ar = RentalManager.vehicles;
// for (let el of ar) {
//   console.log(el.id);
// }
// const testVehicle = new Vehicle("v1", "Generic Model", 100);
// const truck = new Truck("t1", "hhdf", 100, 150);
// console.log(truck.id);
// console.log(testVehicle.id); // Should print "v1"
// testVehicle.id = "v2";    // ❌ TS ERROR: Cannot assign to 'id' because it is read-only.

// console.log(testVehicle.isRented); // Should print false (default)
// console.log(testVehicle._isRented); // ❌ TS ERROR: Property '_isRented' is private.

// console.log(testVehicle.calculatePrice(3)); // Should print 300

// const myCar = new Car("c1", "Sedan", 100);
// const myTruck = new Truck("t1", "Big Rig", 150, 5000);

// console.log(myCar.calculatePrice(2)); // Expected: 200
// console.log(myTruck.calculatePrice(2)); // Expected: 350 (150*2 + 50)

// Test 1.1: Extremely short or long rental periods
// const bike = new Vehicle("b1", "Mountain Bike", 20);
// console.log(bike.calculatePrice(0.5)); // Expected: 10 (Half day)
// console.log(bike.calculatePrice(0)); // Expected: 0

// Test 1.2: Checking Price Consistency
// const luxury = new Vehicle("l1", "Limo", 500);
// const price1 = luxury.calculatePrice(5);
// const price2 = luxury.calculatePrice(5);
// console.log(price1 === price2); // Expected: true (Method should be "pure")

// Test 1.3: Attempting to bypass the getter (Logic Test)
// Note: In the actual class, you'll need a way to set _isRented
// to true for this test, usually via a rent() method.

// Test 2.1: Prototype Check
// const myCar = new Car("c1", "Toyota", 50);
// console.log(myCar instanceof Vehicle); // Expected: true (Inheritance check)
// console.log(myCar instanceof Car); // Expected: true

// Test 2.2: Truck Multi-day Fee Logic
// const lightTruck = new Truck("t1", "Small Van", 100, 500);
// const heavyTruck = new Truck("t2", "Huge Truck", 100, 5000);

// Does the $50 fee apply only ONCE per rental, or per day?
// Logic check: (100 * 3) + 50 = 350
// console.log(lightTruck.calculatePrice(3)); // Expected: 350

// Test 2.3: Data Integrity
// Ensure the Truck constructor is actually saving the cargoWeight
// You might need a public getter for cargoWeight to run this test!
// console.log(heavyTruck.cargoWeight); // Expected: 5000

// enum Size {
//   Small = "small",
//   Medium = "medium",
//   Large = "large",
// }

// const size: Size = Size.Large; // large

// console.log(size);

// const herSize: Size = Size.Medium;

// if (herSize === Size.Medium) {
//   console.log("Hello the medium size");
// }

// const tuple: [number, string] = [1, "hello"];

// console.log(tuple.length /* length = 2 */, tuple[0]);

/*
EmailNotification

SMSNotification

PushNotification
*/
// abstract class Notificat {
//   abstract send(message: string): string;
// }

// class EmailNotification extends Notificat {
//   send(mess: string) {
//     return "Email sent: " + mess;
//   }
// }

// class SMSNotification extends Notificat {
//   send(mess: string) {
//     return "SMS sent: " + mess;
//   }
// }

// class PushNotification extends Notificat {
//   send(mess: string) {
//     return "Push notification sent: " + mess;
//   }
// }

// function notifyUser(obj: Notificat, message: string) {
//   return obj.send(message);
// }

// // console.log(
// //   notifyUser(new EmailNotification(), "Hello"),
// //   notifyUser(new SMSNotification(), "Your code is 1234")
// // );

// console.log(notifyUser(new PushNotification(), "New message received"));

// const notifications: Notificat[] = [
//   new EmailNotification(),
//   new SMSNotification(),
//   new PushNotification(),
// ];

// notifications.forEach((n) => console.log(n.send("System update")));

class Person {
  constructor(public id: number, public name: string, public city: string) {}

  protected drinkCoffee(): void {
    console.log(this.name + " " + "is now drinking coffee");
  }

  work(): void {
    this.drinkCoffee();
    console.log(this.name + " " + "is now working");
  }
}

const person: Person = new Person(2, "Khaled", "Makkah");
person.work();

// class User {
//   [key: string]: string;
// }

// const user = new User();

// interface User {
//   [key: string]: string;
// }

// // const user: { [key: string]: string } = {};

// const user: User = {};

// user.name = "Dawoud";
// console.log(user.name);

// interface user {
//   title: string;
//   register(name: string): string;
// }

// interface people extends user {
//   log(name: string): string;
// }

// class User implements people {
//   constructor(public title: string) {
//     this.title = title;
//   }

//   register(name: string): string {
//     return "Hello, " + name;
//   }

//   log(name: string): string {
//     return name;
//   }
// }

// const u1 = new User("Khaled");

// console.log(u1.register("Dawoud"));

type OrderStatus = "completed" | "cancelled";

type OrderItem = {
  name?: string;
  price: number;
  quantity: number;
  discount?: number; // percentage (0–100)
};

type Order = {
  id: number;
  status: OrderStatus;
  items: OrderItem[];
};

const orders: Order[] = [
  {
    id: 1,
    status: "completed",
    items: [
      { name: "Laptop", price: 1000, quantity: 1, discount: 10 },
      { name: "Mouse", price: 50, quantity: 2 },
    ],
  },
  {
    id: 2,
    status: "cancelled",
    items: [{ name: "Keyboard", price: 100, quantity: 1 }],
  },
  {
    id: 3,
    status: "completed",
    items: [{ name: "Monitor", price: 300, quantity: 2, discount: 5 }],
  },
];

/**
{
  totalRevenue: 1570,
  totalItemsSold: 5,
  totalDiscount: 170
}
 */
type Summary = {
  totalRevenue: number;
  totalItemsSold: number;
  totalDiscount: number;
};

enum Status {
  completed = "completed",
}
const generateSummary = (orders: Order[]): Summary => {
  const obj = { totalRevenue: 0, totalItemsSold: 0, totalDiscount: 0 };

  for (let order of orders) {
    if (order.status === Status.completed) {
      for (let item of order.items) {
        obj.totalRevenue += item.price * item.quantity;
        if (item.discount) {
          if (item.discount >= 100 || item.discount < 0) {
            throw new Error("It is not logic");
          }
          obj.totalDiscount +=
            (item.discount * item.quantity * item.price) / 100;
        }

        obj.totalItemsSold += item.quantity;
      }
    }
  }

  return { ...obj, totalRevenue: obj.totalRevenue - obj.totalDiscount };
};
console.log(generateSummary(orders));

const orders2: Order[] = [
  {
    id: 1,
    status: "completed",
    items: [{ name: "Book", price: 20, quantity: 2, discount: 0 }],
  },
];

console.log(generateSummary(orders2));

console.log(
  generateSummary([
    {
      id: 3,
      status: "completed",
      items: [{ price: 100, quantity: 0, discount: 150 }],
    },
  ])
);

console.log(
  generateSummary([
    {
      id: 4,
      status: "completed",
      items: [{ price: 100, quantity: 2, discount: 0 }],
    },
  ])
);
