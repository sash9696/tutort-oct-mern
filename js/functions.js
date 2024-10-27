//functions

//building blocks of the program

//function declaration

// function displayMessage(){
//     console.log('Hello world!');
// };

// //call a function
// displayMessage();
// displayMessage();
// displayMessage();
// displayMessage();


//local variables => variable declared inside the function is only visible inside that fucntion


// function displayMessage(){
//     let message = 'Hello world!'
//     console.log(message);
// };
// displayMessage();

// console.log(message);




//outer variables or global variables
//a fucntion can access its outer variable

// let username = 'John';

// function displayMessage(){
//     // let message = `Greetings, ${username} `;
//     let message = 'Greetings, ' + username;

//     console.log(message);
// };
// displayMessage();


//global variables
//variables declared outside of any function 
//global variables are shawdowed by local variables
//minimize the use of glbal variables


//parameters and arguments


// function sum(a, b){ //parameters
//     let total = a + b;
//     return total;
// };

// let result = sum(10,20); //arguments
// console.log(result);


function sum(a, b = 0){ //parameters
    let total = a + b;
    return total;
};

let result = sum(10); //arguments
console.log(result);