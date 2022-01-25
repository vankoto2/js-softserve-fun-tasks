import React, { useState } from "react";

import UserList from "./components/UserList/UserList";
import NewUserForm from "./components/NewUser/NewUserForm";

const DUMMY_EXPENSES = [
  { id: 1, userName: "Ivan Georgiev", age: 33 },
  { id: 2, userName: "Stanislav Monev", age: 36 },
  { id: 3, userName: "Julian Vatkovski", age: 34 },
]

function App() {
  const [users, setUsers] = useState(DUMMY_EXPENSES);

  const addUserHandler = (enteredName, enteredAge) => {
    setUsers((prevUserAdded) => {
      console.log(users);
      return [...prevUserAdded, {
        id: Math.random().toString(),
        userName: enteredName,
        age: enteredAge,
      }];
    });
  };

  return (
    <div>
      <NewUserForm onAddUser={addUserHandler} />
      <UserList usersInfo={users}></UserList>
    </div>
  );
}

export default App;
