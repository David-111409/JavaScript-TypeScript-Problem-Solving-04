const arrow = () => {
  console.log(this.count);
};
arrow(); // undefined

const obj = {
  count: 42,
  arrow: () => {
    console.log(this.count);
  },
  regular() {
    console.log(this.count);
  }
};
obj.arrow(); // undefined
obj.regular(); // 42



