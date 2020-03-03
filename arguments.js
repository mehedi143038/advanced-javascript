function add(num1, num2){
    console.log([...arguments]);
    return num1+num2+arguments[2];
}
console.log(add(2,3,8,3));