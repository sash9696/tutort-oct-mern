//Objects

//keyed collections of various data and complex entities

// let user  = new Object(); //object constructor syntax

// let user1 = {}; //object literal syntax


// let user = {
//     name: 'John',
//     age:20
// };

// // console.log(user.age);

// user.isAdmin = true;

// delete user.age


// let user = {
//     name: 'John',
//     age:20,
//     "likes music": true
// };


// let key = "likes music";

// console.log(user[key]) //square bracted notation


// user[key] = false;



// let user = {
//     name:'John',
//     age:20
// };

// let key = prompt("What do you want to know about the user?", "name");

// console.log(user[key]);
// console.log(user.key); will not work for dynamic

//compute properties 

// let itemToBuy = prompt("Which item to buy", "bananas");
// let minQuantity = 5;

// let cart = {
//   [itemToBuy] : minQuantity
// };

//multiple users 



// function createUser(name, age){
//     // return {
//     //     name:name,
//     //     age:age
//     // }
//     return {
//         name,
//         age
//     }
// };

// let user1 = createUser("John", 20);
// let user2 = createUser("Peter", 40);

//keys of an object will alwya be converted to string

//existence of a property

// let user = {};


// console.log(user.noSuchProperty === undefined); //true means no such property

//in operator



// let user = {
//     name:'John',
//     age:20
// };

// console.log("name" in user);
// console.log("dasdklsa" in user);


//for in loop


let user = {
    name:'John',
    age:20,
    isAdmin:true,
    address: {
        city:'Delhi',
        country:'India'
    }
};

for(let key in user){

    console.log('key is', key);
    console.log('Value is', user[key]);
}

