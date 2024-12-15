import React, { useEffect, useState } from "react";

//useEffect

//side effects => operations that interact with external systems
//ex
//fetching data, subscibing to a service , changinf the dom, setting up event listners

//componetDidMount, componentWillUnmount

//useEffect(callback, [dependecies (optional)])

function Counter() {
  const [count, setCount] = useState(0);

  //this effect will run everytime the component renders
  // useEffect(() => {
  //   console.log(`Component rendered or count changed ${count}`)
  // })

  //runs only once after the compounent mounts
  // useEffect(() => {
  //   console.log(`Component rendered or count changed ${count}`)
  // }, [])

  //dependencies
  // useEffect(() => {
  //   console.log(`Component rendered or count changed ${count}`)
  // }, [count, isRender])

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(`Interval running`);
    }, 1000);

    //cleanup function (rhis runs when the component unmounts or before the next effect)

    return () => {
      clearInterval(timer);
      console.log(`${timer} is cleared`)
    }

  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  // const [isRender, setIsRender] = useState(false);

  return (
    <div>
      {/* {isRender && <Counter />}
      <button onClick={() => setIsRender(!isRender)}>toggle</button> */}
    </div>
  );
}

export default App;
