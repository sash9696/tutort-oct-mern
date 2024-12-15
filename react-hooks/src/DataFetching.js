import React, { useEffect, useState } from "react";

//useEffect

//side effects => operations that interact with external systems
//ex
//fetching data, subscibing to a service , changinf the dom, setting up event listners

//componetDidMount, componentWillUnmount

//useEffect(callback, [dependecies (optional)])

const url = "https://jsonplaceholder.typicode.com/users";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  //fetch the data when component mounts

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Fetched Data: </h1>
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

function App() {
  return <div>
    <DataFetcher />
  </div>;
}

export default App;
