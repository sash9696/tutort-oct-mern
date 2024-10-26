//conditionals

// let year = prompt("In which year ES6 was published?");

// if(year == 2016) console.log('You are correct');

// if(year == 2016){
//     console.log('You are correct');
//     console.log('lets proceed new question');
// }

// if(1){} always true

// const condition = year == 2016;

// if(condition){

// }

// if(year == 2016){
//     console.log('You are correct');
// }else{
//     console.log('You are wrong');

// }

// if (year < 2016) {
//   console.log("Too soon");
// } else if (year > 2016) {
//   console.log("Too late");
// } else { //optional
//   console.log("Correct");
// }

// Conditional operator ? , //ternary operator

// let output = condition ? value1 : value2

// let isAccessAllowed;

// let age = prompt('What is your age?', "");

// isAccessAllowed  = (age > 18) ? true : false;

// console.log(isAccessAllowed);

let personalizedMessage;

let age = prompt("What is your age?", "");

personalizedMessage =
  age < 3
    ? "Hi Child"
    : age < 18
    ? "Hello"
    : age < 50
    ? "Greetings adult"
    : "You are too old";

console.log(personalizedMessage);
