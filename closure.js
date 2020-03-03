function addOne(){
    let count =0 ;
    return function(){
        count++;
        return count;
    }
}
const first = addOne();
console.log(first());
console.log(first());

const second = addOne();
console.log(second());
console.log(second());
console.log(first());
console.log(second());