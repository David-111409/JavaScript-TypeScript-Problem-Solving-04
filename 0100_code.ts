class SafeConfig {
  protected _settings = {
    theme: "dark",
    language: "en",
    notifications: true,
    fontSize: 14,
  };

  getSetting(value: keyof typeof this._settings) {
    return this._settings[value];
  }

  updateSetting<T extends keyof typeof this._settings>(
    setting: T,
    newValue: (typeof this._settings)[T]
  ) {
    this._settings[setting] = newValue;
  }
}

// const config: SafeConfig = new SafeConfig();

// console.log(config.getSetting("theme")); // Expected: "dark"
// console.log(config.getSetting("fontSize")); // Expected: 14

// config.getSetting("hello")

const config = new SafeConfig();

// config.updateSetting("theme", "light"); // ✅ Should work
// config.updateSetting("fontSize", 20); // ✅ Should workc

// console.log(config.getSetting("theme"));
// console.log(config.getSetting("fontSize"));

// // @ts-expect-error
// config.updateSetting("fontSize", "huge");

class AdminConfig extends SafeConfig {
  //   getKeys<T extends keyof typeof this._settings>(): T[] {
  //     return Object.keys(this._settings) as T[];
  //   }
  getKeys(): (keyof typeof this._settings)[] {
    return Object.keys(this._settings) as (keyof typeof this._settings)[];
  }
}

const admin = new AdminConfig();
const keys = admin.getKeys();
console.log(keys);
// 'keys' should be typed as ('theme' | 'language' | 'notifications' | 'fontSize')[]
// const obj: { name: string; age: number } = { name: "Dawoud", age: 29 };

// const keys: keyof typeof obj = "name";

interface Book<T> {
  getTitle(v: T): T;
}

class book implements Book<string> {
  getTitle(v = "he") {
    return v;
  }
}

const b = new book();
console.log(b.getTitle());

type User = {
  id: number;
  name: string;
  city: string;
};

// type readonlyUser<T> = {
//   readonly [Key in keyof T]: T[Key];
// };

// type optionalUser<T> = {
//   [key in keyof T]?: T[key];
// };

// type Person = {
//   id: number;
//   name: string;
//   message: "hello, world";
// };

// const user1: optionalUser<Person> = { name: "Hager", message: "hello, world" };
// console.log(user1.id);
// user1.id = 3;
// console.log(user1.id);

// const user1: Omit<User, "id"> = {
//   //   id: 2,
//   city: "he",
//   name: "jkj",
// };

// const user2: Pick<User, "name"> = {
//   name: "kjkj"
// };

// const user3: Optional<User> = {
//   id: 2,
// };

// type Optional<T> = {
//   [key in keyof T]?: T[key];
// };

type OptionalUser<T> = {
  [key in keyof T]?: T[key];
};

type user3 = OptionalUser<User>;
const user3: Required<user3> = {
  id: 3,
  name: "hello",
  city: "kjkj",
};

console.log(user3);

interface Product<item> {
  item: item;
  numberOfPage: number;
  country: string;
}

type Book = {
  name: string;
  language: string;
};

const book: Book = {
  name: "Hello",
  language: "English",
};

const product: Product<Book> = {
  item: book,
  numberOfPage: 787,
  country: "UK",
};

console.log(product.country);
console.log(product.numberOfPage);
console.log(product.item);


interface User {
  name: string;
  age: number;
  login: (password: string) => void;
}

class Person implements User {
  name = "John";
  age = 30;
  login(password: string) {
    console.log(`User ${this.name} logged in with password ${password}`);
  }
}

const person = new Person();
person.login("myPassword123");
