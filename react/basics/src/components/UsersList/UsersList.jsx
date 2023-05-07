import { useCallback, useMemo, useState } from "react";
import { useUsers } from "../../hooks/useUsers.js";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

export default function UserList() {
  const { users, query } = useUsers();
  // const [users, setUsers] = useState([]);
  const [activeUserEmails, setActiveUserEmails] = useState([]);
  // function fetchUsers() {
  //   return fetch(`https://randomuser.me/api/?seed=nexthink&results=10`);
  // }

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

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        user.name.last.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [users, query]);

  // useEffect(() => {
  //   fetchUsers()
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data.results);
  //     });
  // }, []);
  return (
    <div className="UserList">
      {filteredUsers.map((user) => {
        return (
          <UserCard
            id={`${user.id.name}_${user.id.value}`}
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
