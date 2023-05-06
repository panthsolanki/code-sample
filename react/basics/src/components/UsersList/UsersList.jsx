import { useCallback, useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";
// import useUsers from "../../hooks/useUsers.js";

export default function UserList() {
  // const users = useUsers();
  const [users, setUsers] = useState([]);
  const [activeUserEmails, setActiveUserEmails] = useState([]);
  function fetchUsers() {
    return fetch(`https://randomuser.me/api/?seed=nexthink&results=10`);
  }

  const getIsUserSelected = (userEmail) => {
    return activeUserEmails.includes(userEmail);
  };

  const onUserClick = useCallback(
    (user) => {
      const userEmail = user.email;
      if (getIsUserSelected(userEmail)) {
        const newEmails = activeUserEmails.filter(
          (email) => email !== userEmail
        );
        setActiveUserEmails(newEmails);
      } else {
        setActiveUserEmails((emails) => [...emails, userEmail]);
      }
    },
    [activeUserEmails]
  );

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setUsers(data.results);
      });
  }, []);
  return (
    <div className="UserList">
      {users.map((user) => {
        return (
          <UserCard
            id={user.email}
            firstName={user.name.first}
            lastName={user.name.last}
            isSelected={getIsUserSelected(user.email)}
            onUserClick={() => onUserClick(user)}
          />
        );
      })}
    </div>
  );
}
