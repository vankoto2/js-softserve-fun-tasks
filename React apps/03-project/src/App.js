import React, { useState } from "react";

import UserList from "./components/UserList/UserList"

function App() {
  const [users, setUsers] = useState([
    { userName: "Ivan Georgiev", yearsOld: 33 },
    { userName: "Stanislav Monev", yearsOld: 36 },
    { userName: "Julian Vatkovski", yearsOld: 34 },
  ]);

  return <div>
    <UserList users={users}></UserList>
  </div>;
}

export default App;
