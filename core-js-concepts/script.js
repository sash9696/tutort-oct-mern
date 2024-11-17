



//example 1
// setTimeout(function(){
//     console.log('Callback from settimeout');
// }, 0); //ms 


// const promise = new Promise((resolve) => {
//     setTimeout(function(){
//         resolve('promise resolved');
//     }, 0); 
// })

// promise.then((message) => {
//     console.log(message)
// })

//step 1 all synchronous will execute first
//setTimeout schedules a callback to callback queue
//promise is getting created and it is scheduling callback to callbackqueue

// microtasks = []
// callback = [settimeout1, setTimeout2]

//step 2 event loop will check for microtask
//microtask is empty
//move to callback queue
//settimeout1 will be executed 

//console
//'Callback from settimeout'

//settimeout2  will be executed that resolves

//the .then callback  console.log(message) will go inside microtask queue

// microtasks = [.then]
// callback = []

//promise.then


//console
//'Callback from settimeout'
//promise resolved


//console
//'Callback from settimeout'





// Microtask queue

//promise callbacks(.then, .catch,.finally)

//when a promise is resolved or rejected its (.then, .catch,.finally) callback is added to the microtask queue


//mutation observer callbacks
//that can observe changes into dom are placed in microtask queue

//queueMicrotask()





//example 2


const promise = Promise.resolve('Promise resolved');

setTimeout(function(){
    console.log('Callback from settimeout');
}, 0); //ms 


promise.then((message) => {
    console.log(message)
})

queueMicrotask(() => {
    console.log('Manual microtassk executed')
})

console.log('synchronous code executed');


// microtask=[.then,queueMicrotask]

// macrotask or callback = [setTimeout,]


// console
// 'synchronous code executed'
//Promise resolved'

// microtask=[queueMicrotask]

// macrotask or callback = [setTimeout,]


// console
// 'synchronous code executed'
//Promise resolved'
//'Manual microtassk executed'

// microtask=[]

// macrotask or callback = [setTimeout,]


// console
// 'synchronous code executed'
//Promise resolved'
//'Manual microtassk executed'
// Callback from settimeout


// microtask=[]

// macrotask or callback = []
