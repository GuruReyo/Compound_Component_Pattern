import React from "react";
import withDataFetching from "./components/withDataFetching";
import UserList from "./components/UserList";
import './HOC.css'
const EnhancedUserList = withDataFetching(
  "https://jsonplaceholder.typicode.com/users"
)(UserList);
const HOC = () => {
  return (
    <div className="container">
      <h1 className="h1">User List</h1>
      <EnhancedUserList />
    </div>
  );
};

export default HOC;
