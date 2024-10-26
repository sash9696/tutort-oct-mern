
// 4 logical operators

//|| => OR

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);


// if(1 || 0){
//     console.log('Truthy value')
// };

// let currentHour = 12;

// let isWeekend = true;

// if(currentHour < 10 || currentHour > 18 || isWeekend){
//     console.log("the office is closed")
// }

// //find the first truthy value
// //it evaluates operands from left to right
// //for each operand it converts to boolean. if the result is true it returns original value of that oeprand
// //if all the operands have been evaluated (all are false) returns the last operand

// console.log(undefined || null || 0);

//&& => AND

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);




// result = value1 && value2 && value3

// evaluates from left to right
//first falsy value
//returns the last value if all are false

//precedence of && is higher than ||

// a&&b || c&&d => (a&&b) || (c&&d)


//! => NOT

//coverts the operand to boolean type
//returns the inverse value

// console.log(!true);
// console.log(!0);

// // !! => is sometimes used for converting a value to boolean type

// console.log(!!"hello-world");


// ?? => Nullish Coalescing

//a ?? b
// defined => when the value is neither null or undefined
//if a is defined, then a
//if a isnt defiend, then b


// let user;

// console.log(user ?? "Anonymous");

//  (user !== null && user !== undefined)




let fname = null;
let lname = null;
let nickName = 'coder';

// console.log(fname ?? lname ?? nickName);
// console.log(fname || lname || nickName);


// || returns the first truthy value
// ?? returns the first defined value

// let height = 0;

// console.log(height || 100);

// console.log(height ?? 100);


//?? precedence is same as ||

