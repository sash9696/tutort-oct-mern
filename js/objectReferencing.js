//object refrencing

//primitives , scalars like string, nums, boolean are copied as value or whole value
//non primitve like objects are stored and copied by reference

// let message = "Greetings";

// let sentence = message;

//variable assigned to an object does not stores the object itdelf but it tores the address in the memory (reference)

// let user = {name:'John'};

// let admin = user;

// admin.name = "Peter";

// user ->>>> {name:'John'} <<<<<- admin

//two obejcts are smae only if they have the same reference

// let a = {};

// let b = {};

// console.log(a==b) //false beacuase both have different references

const user = { name: "John" };

user.name = "Peter";

console.log(user.name);

let address = {
  city: "Delhi",
  country: "India",
};
let a = {
  name: "John",
  age: 20,
  isAdmin: true,
  address,
};

let b = {
  name: "Peter",
  age: 40,
  isAdmin: false,
  address,
};
