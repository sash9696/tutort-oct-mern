//closures


//function along with its lexical scope => closures
//closures are consequences of lexical scoping

//a closure is a function that remebers its lexical environment
//even if it is executed outside that enviroment



// function outer(){
//     let outerVar = 'I am in outer scope';

//     function inner(){
//         console.log(outerVar);
//     };

//     return inner;
// }


// const closureFunc = outer();
// closureFunc();


function counter(){

    let count  = 0;

    return function(){
        count ++;
        console.log(count);
    }
};

const increment = counter();

increment();
increment();
increment();

//persistent state