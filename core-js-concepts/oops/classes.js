//OOPS

//paradigm for structuring complex piece of code

// easy to add features and functionality
// a clear structure
//performant (in therms of memory)

//a game with users

//Name : John
//Score: 10

//Name : Peter
//Score: 20

//Functionality
//Ability to increase the score

//Best possible way to store the data and this functionality

//imp
//Objects - to store the functions with their associated data

// const user1 = {
//     name:'John',
//     score: 10,
//     increment: function(){
//         user1.score ++;
//     }
// };

// user1.increment();

//encapsulation

//in practicality there qould be multiple functionalities

//increase score
//decrease score
//delete user
//login user
//log out user
//add avatar
//get user score
// ...
// hundredrs of more functions

//alternative way of creating objects

//using dot notation

// const user2 = {};

// user2.name = "Peter";
// user2.score = 20;
// user2.increment = function () {
//   user2.score++;
// };

//using Object.create()


// const user3 = Object.create(null);

// user3.name = "Dan";
// user3.score = 5;
// user3.increment = function () {
//     user3.score++;
// };



//solution 1  generate objects using a function



// function createUser(name, score){
//     const newUser = {};

//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function(){
//         newUser.score++;
//     };
//     return newUser;
// };


// const user1 = createUser("John", 10);
// const user2= createUser("Peter", 20);

//1 million users
//1 million objects
//Cons
//1 million same function copies
//6  * 1 million same function copies

//Pros
// this code is simple to understand


//solution2

//store the increment function in one object 
//and we can have some kind of mechanism to check if it doesnt find the fuction in lets say
//user1 lookup to another object to chack if it is present



//to make the link or reference


//solution 2


// function createUser(name, score){
//     //along witht he object creation it creates a linkage 
//     // __proto__ or [[Prototype]] they are different from Prototype
//     const newUser = Object.create(functionStore);

//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };


// const functionStore  = {
//     increment: function(){this.score ++},
//     login: function(){console.log('You are logged in', this)},
// };


// const user1 = createUser("John", 10);
// const user2= createUser("Peter", 20);

// user1.increment();


//no problems with this approach but it is not the standard

//solution 3 new keyword

//when u call the constructor fucntion with a new keyword


//it will automate 2 things for us

//automatically create a enw object
//return the new user object


//how?

//refer to the auto created objects?

//where ti put our single copy of functions


// function CreateUser(name, score){


//     this.name = name;
//     this.score = score;

// };

// CreateUser.prototype.increment = function(){
//     this.score ++;
// };

// CreateUser.prototype.login = function(){console.log('You are logged in')}


// console.log(CreateUser.prototype);

// const user1 = new CreateUser('John', 10);


//fast to right
//still use this type of code in production

//90percent the developers fail to answer


// function sum(a,b){
//     return a + b;
// };

// sum.prototype.stored = 5;

// sum(10,20);

// //function => fucntion plus object combo

// //() to invoke
// //. to access object

// console.log(sum.prototype)



//solution 4 es2015 class based syntax

// class CreateUser{
//     constructor(name, score){
//         //instance properties
//         console.log(this)
//         this.name = name;
//         this.score = score;
//     }

//      //instance methods

//      increment(){
//         this.score ++;
//      }

//      login(){
//         console.log('login')
//      }
// }


// const user1 = new CreateUser('John', 10);
// const user2 = new CreateUser('John', 5);

// user1.increment();
// user2.increment();


const obj  ={
    num:3
};


