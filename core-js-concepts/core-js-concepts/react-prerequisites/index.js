//map filter reduce - react
//call apply and bind - react (good to have)
//polyfills
//closure applications
//event delegations
//destructuring - react
//map and set - react
//event bubbling and capturing
//local sotrage, session storage, cookies, indedb - react
//scripts: async and defer
//proxy and reflect (good to have)
//promise methods like promise.all , promise.race etc -  react
//rest parameter and spread syntax - react
//this keyword

//Rest operator(...)

//it ca used for function parameters or destructuring to gather remaining items

// function sum(...numbers){

//     return numbers.reduce((acc, num) => acc + num , 0);
// };

// console.log(sum(1,2,3,4,5));

//Spread operator(...)

//spread is used to unpack elements from an array or object

//array destructuring

// const arr = [1,2,3,4,5];

// const [first, second, ...rest] = arr;

// console.log('data', {
//     first,
//     second,
//     rest
// })

//object destructuring
// const user = {
//     name:"John",
//     age:20,
//     city:"Delhi"
// };

// const {name, ...otherInfo}  = user;

// console.log({name, otherInfo})

// const nums = [10,20,30,40];

// const [first, , third] = nums;

// console.log(first, third);

// const nums = [10,20];

// const [num1, num2, num3 = 30] = nums;

// console.log(num1, num2, num3);

//object destructuring
// const user = {
//     name:"John",
//     age:20,
//     city:"Delhi"
// };

// // const {name: fullName, age: years, city:a} = user;

// // console.log({fullName, years, a})

// const {name, city, age, country='India'} = user;

// console.log(country)

// const nums =[10,[20,30],40];

// const [num1, [num2, num3], num4] = nums;

// console.log(num1, num2, num3, num4)

// const user = {
//   name: "John",
//   age: 20,
//   address: {
//     city: "Delhi",
//     country: "India",
//   },
// };

// function greet({name, age}){

//     console.log(`Hello, my name is ${name} and I am ${age} years old.`)

// };

// greet(user);

// const { name, age, address } = user;

// const {city, country} = address;

// const { name, age, address:{city, country} } = user;

// console.log(city, country);

//array methods
//map filter and reduce

//map  to transform an array , return a new array

// const nums = [1,2,3,4];

// //use map to square each number

// // const squares = nums.map(function(num, index, array){
// //     // console.log({num, index, array})

// //     return num * num
// // })

// const squares = nums.map((num) => num * num)
// console.log(squares);

// const users = [
//     {id: 1, username:'john'},
//     {id: 2, username:'bob'},
//     {id: 3, username:'dan'},
// ];

// // const usernames = users.map(user => ({id:user.id, username: user.username.toUpperCase()}));

// const usernames = users.map(user => user.username.toUpperCase());

// console.log(usernames)

// Array.map(callback(currentValue, index, array))

// const sum = a => a ;

// console.log(sum(10,20))



// Array.filter(callback(currentValue, index, array))


const nums = [1, 2, 3, 4,5,6,7,8,9];

// const squares = nums.map(num => num * num);
// console.log(squares);


// const filteredNumbers = nums.filter(num => num >=5);

// console.log(filteredNumbers);
  

const users = [
    {id: 1, username:'john', age:22},
    {id: 2, username:'bob', age:17},
    {id: 3, username:'dan',age:19},
];


const adults = users.filter(function (user, index, array){

    // console.log(user, index, array)

    return user.age >= 18
})
console.log(adults)