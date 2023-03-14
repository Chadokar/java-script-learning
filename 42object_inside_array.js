// // object inside array 
// // very usefull in real world applications

const users = [
    {userId:1,firstName:'Shubham',gender:'male'},
    {userId:2,firstName:'mohit',gender:'male'},
    {userId:3,firstName:'nitish',gender:'male'},
]
console.log(users[1].firstName)
for(let i of users){
    console.log(i);
}
users[1].firstName = 'Raj'
for(let user of users){
    console.log(user.firstName);
}

// (var i = 0; i < 5 xss=removed> { console.log(i) }, 0) }