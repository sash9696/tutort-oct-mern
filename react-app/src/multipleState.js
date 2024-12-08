import { useState } from "react";
import "./App.css";

function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  console.log(`UserProfile component renders`)
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <p>Name: {name} </p>
      <p>Age: {age}</p>

     
    </div>
  );
}

function App() {
  console.log(`App component renders`)
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
