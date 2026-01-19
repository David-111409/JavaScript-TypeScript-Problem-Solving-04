const findPeaks = (ar: number[]): number[] => {
  let l: number = ar.length;

  if (!l) return [];
    
  else if (l === 1) return [0];

  let indeces: number[] = [];

  if (ar[0] > ar[1]) indeces.push(0);

  for (let i = 1; i < l - 1; i++) {
    if (ar[i] > ar[i - 1] && ar[i] > ar[i + 1]) indeces.push(i);
  }

  if (ar[l - 1] > ar[l - 2]) indeces.push(l - 1);

  return indeces;
};

console.log(findPeaks([1, 5, 5, 2]));


// type obj = {
//   id: number;
//   title: string;
// };

class BankAccount {
  //   username?: string;
  constructor(
    public readonly accountNumber: number,
    private balance: number,
    public username?: string
  ) {
    this.username = username;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("The amount should be positive.");
    }
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("The amount should be positive.");
    } else if (amount > this.balance) {
      throw new Error("The balance is not sufficient.");
    }

    this.balance -= amount;
  }

  get getBalance(): number {
    return this.balance;
  }

  set giveBalance(amount: number) {
    if (amount <= 0) {
      throw new Error("The balance should be positve");
    }
    this.balance = amount;
  }
}

// const account = new BankAccount(200);
// account.deposit(100);
// account.withdraw(-10);
// console.log(account.getBalance());

const myAccount = new BankAccount(2, 50, "dawoud");

myAccount.deposit(50);
console.log(myAccount.getBalance, myAccount.accountNumber, myAccount.username); // Expected: 150

// myAccount.withdraw(200); // Expected: "Inssuficient funds"

myAccount.withdraw(30);
console.log(myAccount.getBalance); // Expected: 120

// myAccount.giveBalance = -500;
// console.log(myAccount.getBalance);
// IMPORTANT: This should cause a TypeScript error if you try it:
// myAccount.balance = 5000;

console.log(myAccount.constructor === BankAccount);
console.log(myAccount instanceof BankAccount);
