import { useState } from "react";
import "./App.css";

//data => UI (always in sync) => very hard problem to solve

//vanilla js to all the libraries and frameworks like react, vue, angular
//they solve this problem in their own ways

// function incrementCount(){

//   let count  = 0;

//   return () => {
//     count ++;
//     return count
//   }
// };

// const counter = incrementCount();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// console.log()

function App() {

  //state => the data that changes over time
  //hook is inbuilt function in react

  //  const [state, setState]  = useState(initialState);
  //state => this holds the current value of the state
  //setState => This is the function that tells react that something has changed, react rerenders that component
  //initialState 
  //  console.log({state, setState})

  const [counter, setCounter] = useState(0);

  let count = 0;

  function handleClick() {
    // counter = counter + 1; //dont mutate state directly

    // setCounter(counter + 1);
    // //it doesnt immediatrly update the state
    // //it schedules a re-render which happens later
    // setCounter(counter + 1);

    //react batch these updates, that results in the last all actually taking effect

    //Note

    //if u want to udpate the state based on previous value
    //use functional form of setState

    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);


    // setCounter(5);

    //useState is being called with the initial state
    //the state value persists between renders . React will keep track of it for you
    //when u call setState, react schedules a re-render of the component with new state

  }

  console.log(`App component rendered ${counter} times`)
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <h2> {counter} </h2>
        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
}

export default App;
