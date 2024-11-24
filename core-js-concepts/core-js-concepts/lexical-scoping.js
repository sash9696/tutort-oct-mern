


//scoping in javascript

//scoping refers to visibilty od variables and functions in certain part of ur code during the execution


//local scope(function scope)
//a variable declared within a function is only accessible within that function

//block scope : variables declared in block {} are only accessible withing that block



let globalVar = 'I am global';
function outer(){
    let outerVar = "I am outer variable";
    function inner(){
        let innerVar = "I am in inner function";

        console.log(globalVar); //accessible
        console.log(outerVar); //accessible
        console.log(innerVar); //accessible
    };
    inner();
    console.log(outerVar); //accessible
    console.log(innerVar); //referenceError: innerVar is not defined
 
};
outer();
console.log(globalVar); // accessible
console.log(outerVar); //referenceError
console.log(innerVar); //referenceError


//lexical scoping in javascript

// the scope is already set at the time the function is defined and not the function in invoked

//in js when a function is defined it remebers the environment  in which it ws defined