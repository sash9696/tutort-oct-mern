// livescript

//js can be used in browser, it can also run on server
//bascially it can rown on any device that has a special program JS Engine

// v8 => in chrome, opera, edge
//spidermonkey => firefox
//chakra for IE, Squirrel fish for safari

// very basic idea of how these engine works

//the engine parses the script
//then it compiles (converts) the script to machine code
//then the machine gets executed

//Note engine applies optimizations at each step of the process

//JS can do in browser

// add new html , modify , manipulate existing content or Style
// react to user events or interactions liek mouse clicks, pointer movements , key presses etc
// send requests over the network  to remote severs
// get and set cookies
// persist the data in the inbuilt storages of browsers

//JS cant do in browser

//js cannot read or write files on the hard disk, it does not have access to computers internal features like OS
//user's explicit permissions are required to access some features like microphone , etc
//diff tabs/windows does not know about each other
//Same Origin Policy
//any page from http://www.example.com is opened can access another browser tab with http://linkedin.com

// Variables

//varable is a named storage

//var , let , const

// let message; //declaration
// message = 'hello world'; //initialization

// let num  = 10;

// alert(num);
// console.log(num)

// let num  = 10, age=25, username='John';

// let num = 10;
// console.log(num)

// num = 'hello world';

// console.log(num)

// var num = 10;

// Variable naming

//2 limitations
// the name must contain only leters, digits or symbols like $ , _
//the first char cannot be  a digit

//camelCase
//casing matters here .i.e variavles name and  NAME  aare different

// "use strict";
// num = 10;

//Constants => unchanging values

// const birthdayDate = '22.02.2000';

// birthdayDate=''

//Uppercase constants

// const COLOR_RED = "#F00";

// Data types (8 basic types)

//a value in js is always of a certain type

// Number (both integer and floating point numbers)

// let num = 10;
// num = 10.3223;

// // special numeric values

// // Infinity, -Infinity, NaN

// //exception NaN ** 0

// // BigInt

// // larger than (2^53 - 1) and less than -(2^53 - 1)

// const bigInt = 84379832744792374237492374983749327498374293749832742398493243n;

// String

// let name = "john";
// let Name = 'peter';

// //`` are extended functionality

// console.log(`the sum is ${10 + 30}`)

// Boolean true false

// let isNameFieldChecked = true;

// //null value => special value that means nothing, empty or a value unknown

// let age = null;

//undefined value => special value , the value that is not assigned

//objects and symbols

var a;
