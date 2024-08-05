//Exception at compile in Typescript and in Javscript, at run time
//Javascript
console.log("1. Javascript -> Starts");
function add (a,b) {
    return a+b;
} 

console.log("Add values are :: "+ add("2",3));
console.log("1. Javascript -> End");
//Typescript
console.log("1. Typescript -> Starts");
function  addTypescript(a: Number, b: Number): Number {
    return a+b;
}
console.log("Add values are :: "+ addTypescript("2",3)); // Caught exception.
console.log("1. Typescript -> End");

//Javascript
console.log("2. Javascript -> Starts");
const user = {
    "id":"raghava",
    "value":"text"
}

console.log(user.valu);
console.log("2. Javascript -> End");

//Typescript
console.log("2. Typescript -> Starts");
interface User{
    name: String;
    age:  String;
}
const user1: User = {
    name: "Raghava",
    age:20

}
console.log(user1.id1)
console.log("2. Typescript -> End");
