import React, { useEffect, useState } from "react";
import { useFetch } from "./customHooks/useFetch";

//useEffect

//side effects => operations that interact with external systems
//ex
//fetching data, subscibing to a service , changinf the dom, setting up event listners

//componetDidMount, componentWillUnmount

//useEffect(callback, [dependecies (optional)])

const DataFetcher = () => {
  const {
    data: users,
    loading: loadingUsers,
    error: usersError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  const {
    data: posts,
    loading: loadingPosts,
    error: postsError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loadingUsers || loadingPosts) return <div>Loading...</div>;

  if (usersError) return <div>Error fetching users: {usersError.message} </div>;

  if (postsError) return <div>Error fetching posts: {postsError.message} </div>;


  // JSON.stringify(value, replacer, space)
  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null,2)}</pre>
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null,2)}</pre>
    </div>
  );
};

function App() {
  return (
    <div>
      <DataFetcher />
    </div>
  );
}

export default App;
