
//let const var

//var =>  (oldest and traditional declaration)

//function scoped

// if(true){
//     var x  = 10;
// }

// console.log(x);

//function scope

// var x  = 20;
// function a(){
//     var x  = 10;
// }

// a();
// console.log(x);


//hoisting

//declarations that are hoisted at the top of their scope
//memory phase


// console.log(x); //hoisting
// var x = 10;
// console.log(x);


//Note => function declarations,  classes and all variables are hoisted


//can be redeclared

// var x = 10;
// var x = 100;

// console.log(x);


//Let
//ES6 (ECMAScript 2015)
//more strict than var

//blocked scope
//block  {}



// {
//     let x = 10;
// }

// console.log(x);

//hositing with temporal dead zone

// console.log(a);
// let a = 10;

//temporal dead zone the period before the declaration is called 
//they are not accessible before the actual declaration

//reference error


//cannot redeclare in the same scope


// let x =10;

// let x = 100;

//const  (Constant)
//more stricter

//blocked scope

//cannot be reassigned

// const a = 10;

// a = 20;

// Uncaught TypeError:

//hoisted with TDZ


//difference

//scope ? function or block
//Hoisting
//reassignment
//redeclaration in same scope
//mutability with objects
//use case
//older codebases or legacy systems will have var
//most flxible choice for general variable declaration let
//when a value should never be reassigned then const
