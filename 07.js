/*
trim()
toUpperCase()
toLowerCase()
slice
*/

let firstName = "      Shubham   ";

console.log(firstName.length);
firstName = firstName.trim(); //"Shubham"
console.log(firstName);
console.log(firstName.length);
firstName = firstName.toUpperCase();
firstName = firstName.toLowerCase();
console.log(firstName);

//start index
//end index

let newString = firstName.slice(0,4);
console.log(newString);
newString = firstName.slice(2);
console.log(newString);