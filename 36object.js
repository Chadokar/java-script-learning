// object reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {name:"Shubham",age:20};
const person = {
    name : "Shubham",
    age : 20,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// // how to access data from objects
// console.log(person.name);
// console.log(person.age);

// console.log(person["name"]);
// console.log(person["age"]);

// how to add key value pair to objects
// person.gender = "male"; //or
person["gender"] = "male";
console.log(person);