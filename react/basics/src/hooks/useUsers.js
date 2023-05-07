import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

function fetchUsers() {
  return fetch(`https://randomuser.me/api/?seed=nexthink&results=10`);
}

const UsersContext = createContext({
  users: [],
  query: "",
  setQuery: () => {},
});

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  // const users = [
  //   {
  //     id: "ddf53162-6c04-4979-9321-2c3c7b7585ae",
  //     firstName: "First 1",
  //     lastName: "Last 1"
  //   },
  //   {
  //     id: "914d4c35-4ef3-4db2-a47d-eea75eed502c",
  //     firstName: "First 2",
  //     lastName: "Last 2"
  //   }
  // ];
  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        query,
        setQuery,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
