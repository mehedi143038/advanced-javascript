const numbers = [3,6,4,3,7,8,86,5,8,9];
// const square = numbers.map(function(x){
//     return x*x;
// })
// console.log(square);

// let square = numbers.map(x=>x*x);
// console.log(square);

//filter
let filterArray = numbers.filter(x=> x>5);
console.log(filterArray);

let findValue = numbers.find(x=> x>8);
console.log(findValue);