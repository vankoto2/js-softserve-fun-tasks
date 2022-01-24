import React from "react";

import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="test">
      <div className="users-list">
        {props.users.map((user) => (
          <div className="user" key={user.id}>
            {user.userName} ({user.age} years old)
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
