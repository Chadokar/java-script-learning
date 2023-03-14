// difference between dot and bracket notation
const key = "email";
const k = "chadokar"
const person = {
    name: "Shubham",
    age: 20,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

console.log(person["person hobbies"]);
person[key] = k;
console.log(person);