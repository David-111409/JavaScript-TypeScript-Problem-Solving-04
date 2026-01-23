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
