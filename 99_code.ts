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
