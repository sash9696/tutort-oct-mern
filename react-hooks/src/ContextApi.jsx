import React, { useContext } from "react";

//react context api

//prop drilling

//allows us to share values or states across entire component tree without having to pass props manually at each level

//managing global states => user authenticated, theme preferences or localization settings etc

//setup context api

// create a context using createContext() => creates a context object

//Context.Provider => a component to provide the context to value to its child components

//Context.Consumer => component that subscribes to the context and consumes the value provided by nearest provider

const UserContext = React.createContext();

console.log("UserContext", { UserContext });

function User3() {

  const user = useContext(UserContext);
  return (
    // <UserContext.Consumer>
    //   {(value) => <h3>Name: {value} </h3>}
    // </UserContext.Consumer>
    (
      <h3>Name: {user} </h3>
    )
  );
}

function User2() {
  return <User3 />;
}
function User() {
  return (
    <>
      <h2>User</h2>
      <User2 />
    </>
  );
}

function App() {
  return (
    <UserContext.Provider value="John">
      <div>
        <User />
      </div>
    </UserContext.Provider>
  );
}

export default App;
