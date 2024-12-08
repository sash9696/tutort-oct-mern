import { useState } from "react";
import "./App.css";

function ItemList() {
  const [items, setItems] = useState([]);

  console.log("items", items);

  function addItem() {
    //dont manipulate or mutate the state directly;

    // const newItems = [...items, `Item ${items.length + 1}`];

    const newItems = items.slice();

    newItems.push(`Item ${items.length + 1}`);

    setItems(newItems);

    // setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  }

  const displayItems = items.map((item, index) => (
    <li>{item}</li>
  ))
  
  return (
    <div>
      <h1>Item List</h1>
      <button onClick={addItem}>Add Item</button>

      <ul>
        {/* list items */}

        {/* {
          items.map(function(item, index){
            return (
              <li>
                {item}
              </li>
            )
          })
        } */}
      {displayItems}

      </ul>
    </div>
  );
}

function App() {
  console.log(`App component renders`);
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
