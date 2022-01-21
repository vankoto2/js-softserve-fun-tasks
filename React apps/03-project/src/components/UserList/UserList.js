import React from "react";

const UserList = (props) => {
  console.log(props.users[0]);
  return (
    <div>
      {props.users.map((test) => (
          console.log(test.userName),
        <div>{test.userName}</div>
      ))}
    </div>
  );
};

export default UserList;
