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
