// use const for creating array

// heap memory ["apple", "mango"] 0x11

const fruits = [false, "mango"]; //0x11
fruits.push("banana");
console.log(fruits);
const newarray = [];
for(let i=0;i<fruits.length;i++){
    newarray.push(false); 
}
newarray[1] = true;
console.log("fruits",fruits);
console.log("newarray",newarray);
