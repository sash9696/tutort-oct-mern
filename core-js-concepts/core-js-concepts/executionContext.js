//javascript is synchronous single threaded language

//single threaded
//thread => smallest unit of execution

//in js there is only one path of execution for js code
//it processse each operation one at a time in a sequence (top to bottom) or as it appears in soucre code


// console.log('First')
// console.log('Second')
// console.log('Third')


//synchronous
//tasks are executd one after the other
//no other tasks can be performed until the current task is completed


//working of javascript

//everythings happens inside an execution context
//execution context contains two components 
//component 1 => (Variable environment) or Memory component
//component 2 => (Thread of execution) or Code component

//runs two phases

//1st phase Memory allocation phase 
//=> before even the first line gets executed js assigns memory
//=> where all the variables, parameters, function declarations, classes gets assigned memory
//=> in case of variables it gets assigned undefined
//=> in case of fucntions , declarations. it stores literally the whole fucntion in memory
//=> stored like key value pairs



//2nd phase Code execution phase 
//=> again from top to bottom it executes the code likne by line


//call stack

//stores the sequence of execution contexts
//it manages the execution of execution contexts


//Note => whenever a program or a function is invoked or called an execution context
//is created



// var a = 10
// console.log(a);


// function sum(a,b){
//     var sum = a + b;
//     return sum;
// }

// let total = sum(10,20)
// console.log(total);


//Step
//=> Global execution context gets created

//1st phase memory allocation phase
//=>Memory Component
// a : undefined,  10
// sum: function{}

//2nd phase code execution phase
//Code component
    // a = 10
    // console.log(a);   //print 10  to the console

    //sum(10,20) //function invocation

    //sum's fucntion execution context is created 
    
    //1st phase is memory allocation phase
    //memory component
    //a: 10
    //b: 20
    //sum: undefined, 30


    //2nd phase code execution phase
    //code component

    // sum = a + b;
    //return sum;

    //finally sum's fucntion execution context is deleted
    
    // console.log(sum(10,20)); //console it will print 30

    //Global execution context gets deleted

//Note in the end call stack becomes empty


// function x() {
//   console.log(10);
// }

// function y() {
//   x();
//   console.log(20);
// }

// function z() {
//   console.log(30);
//   y();
// }
// z();


// function x() {
//   console.log(10);
// }

// function y(cb) {
//   cb();
//   console.log(20);
// }

// y(x)


function x() {
    console.log(10);
  }
  
  function y() {
    console.log(20);
  }
  
  x();
  y();