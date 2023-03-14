// fuctions inside function

app()

function app(){
    const myFunc = () =>{
        console.log("hello from myFunc");
    }

    const addTwo = (num1,num2) =>{
        return num1 + num2;
    }
    // different way of declaration of function
    const mul = (num1,num2) => num1*num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
