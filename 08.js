/*
typeof operator

data types (primitive data types)
string "harshit"
number 2, 4, 5.6
booleans
undefined
null
BigInt
Symbol
*/

let age = 22;
let firstName = "harshit";

console.log(typeof age);

//convert number to string.
console.log(typeof(age + ""));

//convert number to string.
//22 -> "22"
age = age + "";
console.log(typeof(age)); //"22"

//convert string to number.

let myStr = +"34";
console.log(typeof myStr);

age = "18";
age = Number(age);
console.log(typeof age);