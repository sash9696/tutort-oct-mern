

//js is a synchronous single threaded langugae


//asynchronous programming in js


//non blocking operations

//js can continue processing other tasks while waiting for a response from tasks that are taking time

//ex => I/O operation, timer, HTTP request etc


//KEy concepts

//Event Loop

//Web Apis

//Callback Queue

//Call Stack


// console.log('Start');

// function runningFor1Sec(){

//     const start = Date.now();

//     while(Date.now() - start < 1000){
//         //approx for 1 sec
//     }
//     console.log('Sync task is completed')
// }

// setTimeout(function(){
//     console.log('Callback from settimeout');
// }, 0); //ms 

// runningFor1Sec();

// console.log('End');



//not all callbacks are async
//sync callback
// function x(){
//     console.log('x')
// }



// function y(cb){
//     console.log('y');
//     cb();
// }


// y(x);