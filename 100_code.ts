// abstract class Pay {
//   abstract pay(): void;

//   notPaid(): boolean {
//     return true;
//   }
// }

// class User extends Pay {
//   constructor(public id: number, public name: string) {
//     super();
//   }
//   get getNotPaid(): boolean {
//     return super.notPaid();
//   }
//   pay(): void {
//     console.log("pay the money?");
//   }
//   //   [key: string]: string;
// }

// const user1 = new User(2, "dsawou");
// console.log(user1.notPaid());
// // user1.pay();
// // user1.name = "Hager";
// // user1.city = "cairo";
// // console.log(user1);

abstract class Payment {
  abstract pay(amount: number): string;
}

/**
 * CreditCardPayment

PaypalPayment

BankTransferPayment
 * 
 */

class CreditCardPayment extends Payment {
  pay(amount: number): string {
    return `Paid $${amount} using Credit Card`;
  }
}

class PaypalPayment extends Payment {
  pay(amount: number): string {
    return `Paid $${amount} using PayPal`;
  }
}

class BankTransferPayment extends Payment {
  pay(amount: number): string {
    return `Paid $${amount} using Bank Transfer`;
  }
}

/**processPayment(new CreditCardPayment(), 100);
 */

function processPayment(obj: Payment, amount: number): string {
  return obj.pay(amount);
}

console.log(processPayment(new CreditCardPayment(), 100));
console.log(processPayment(new PaypalPayment(), 50));
console.log(processPayment(new BankTransferPayment(), 200));

const payments: Payment[] = [
  new CreditCardPayment(),
  new PaypalPayment(),
  new BankTransferPayment(),
];

payments.forEach((p) => console.log(processPayment(p, 75)));

/*
// abstract class Payment {
//   abstract pay(): void;
//   constructor(public currency: string) {}

//   noPay(): false {
//     return false;
//   }
// }

// class PaymenWithUSD extends Payment {
//   constructor(currency: string) {
//     super(currency);
//   }
//   pay(): void {
//     console.log("pay with " + this.currency);
//   }
// }

// class PaymentWithRial extends Payment {
//   pay(): void {
//     console.log("Hello, with Rial " + this.currency);
//   }
// }
// const pay = new PaymenWithUSD("dollar and euro");
// pay.pay();
// let final = pay.noPay();
// console.log(final);

// const payWithRiyal = new PaymentWithRial("100 riyal");
// payWithRiyal.pay();

class SendEmail {
  constructor(public from: string, public to: string, public subject: string) {}

  send(): void {
    console.log("The email has been sent successfuly");
  }

 private validateEmail(): void {
    if (!this.from.includes("@") || !this.to.includes("@")) {
      throw new Error("Email is not right");
    }
  }

 private validateSubject(): void {
    if (this.subject.length < 5) throw new Error("The content must be larger");
  }
}

const email1 = new SendEmail(
  "ahmed@gmail.com",
  "ahmed@gmail.com",
  "hello, ahmed"
);

email1.send();

*/
