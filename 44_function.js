//fuction declarations


/*
function singHappyBirsthday(){
    console.log("happy birthday to you")
}

//function expression

const singHappyBirsthday = function(){
    console.log("happy birth to you ......");
}
*/
//arrow function
const singHappyBirsthday= ()=>{
    console.log("happy birthday to you ......");
}

// singHappyBirsthday();

/*
function isEven(number){
    return number%2 === 0;
}

var isEven = function(number){
    return number%2 === 0;
}
*/
const isEven = (number)=>{
    return number%2 === 0;
}
// if input is single variable we can declare it like this also
// const isEven = number =>  number%2 === 0;
// console.log(isEven(5));



/*
function firstChar(anyString){
    return anyString[0];
}

const firstChar = function(anyString){
    return anyString[0];
}
*/

const firstChar = (anyString)=>{
    return anyString[0];
}

// if input is single variable we can declare it like this also
const newfirstChar = anyString => anyString[0];
