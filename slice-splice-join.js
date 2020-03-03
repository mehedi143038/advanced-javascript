const numbers = [3,4,6,7,7,88,9,9];
const part = numbers.slice(4,8);
console.log(part);
console.log(numbers);

const remove = numbers.splice(3,1,1);
console.log(remove);
console.log(numbers);

const all = numbers.join("+");
console.log(all);