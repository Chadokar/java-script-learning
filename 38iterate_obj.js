// how to iterate object 
const person = {
    name: "Shubham",
    age: 20,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop
// Object.keys

/*
for(let key in person){
    console.log(person[key]);
}
*/

// key value pair

// for(let key in person){
//     // console.log(`${key}  :  ${person[key]}`);
//     console.log(key, " : ",person[key]);
// }

// console.log(typeof (Object.keys(person)));
// console.log(Array.isArray(Object.keys(person)));

for(let key of Object.keys(person)){
    console.log(person[key]);
}