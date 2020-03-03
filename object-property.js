const students = [
    {age: 23, name: "hero alom"},
    {age: 65, name: "dipjol bro"},
    {age:84, name: "utsha votku"},
    {age: 82, name: "mojibor hero"}
]

for(let i=0;i<students.length;i++){
    console.log(students[i].name);
}

const name = students.map(x => x.name);
console.log(name);

//filter
let property = students.filter(x=> x.age>34);
console.log(property);


//find

let findOne = students.find(x=> x.age===84);
console.log(findOne);