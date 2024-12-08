import { useState } from "react";
import "./App.css";


function UserProfile() {
  
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });

  //2 rules of hook

  //top level management only
  //it should be inside react component or react function 



  function updateUser(e) {
    console.log("e", e.target.name);

    const key = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [key]: value }));
  }

  const updateUserName = (name) => {
    // setUser((prevState) =>  ({...prevState, name}))

    setUser((prevState) => {
      return { ...prevState, name };
    });
  };

  const updateUserAge = (age) => {
    // setUser((prevState) =>  ({...prevState, name}))

    setUser((prevState) => {
      return { ...prevState, age };
    });
  };

  console.log(`UserProfile component renders`);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={user.name}
        // onChange={(e) =>  updateUserName(e.target.value)}
        onChange={updateUser}
        name="name"
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={user.age}
        // onChange={(e) =>  updateUserAge(e.target.value)}
        onChange={updateUser}
        name="age"
      />

      <p>Name: {user.name} </p>
      <p>Age: {user.age}</p>
    </div>
  );
}


// let obj = {
//   name:'',
//   age:0
// };

// let dynamicKey = 'name'

// let dynamicValue = 'john';

// obj = {...obj, [dynamicKey]: dynamicValue};

// console.log(obj);


// let obj = {};

// let keys = ['fname', 'lname', 'age'];

// let values = ['john', 'abc', 20];

// for (let i = 0; i < keys.length; i++){
//   obj[keys[i]]
// }

function App() {
  console.log(`App component renders`);
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
