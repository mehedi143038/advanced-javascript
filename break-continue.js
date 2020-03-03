const numbers = [23,4,5,6,6,7,7];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
    // if(numbers[i]==6){
    //     break;
    // }
    if(numbers[i]>5){
        continue;
    }
}