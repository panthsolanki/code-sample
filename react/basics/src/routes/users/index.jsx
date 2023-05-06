import { UsersProvider } from "../../hooks/useUsers";
import App from "./App";
import "./styles.css";

const Users = () => {
  return ( <UsersProvider>
    <App />
  </UsersProvider>)
}

export default Users;