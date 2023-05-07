import Header from "../../components/Header/Header";
import UsersList from "../../components/UsersList/UsersList";
import { useUsers } from "../../hooks/useUsers";

/**
 * 1. Fetch list of users from the API and render the users first
 *    and last name as a list on a page.
 *
 * 2. Allow user to add and remove users to a list of "selected users" by
 *    clicking on "Add" or "Remove".
 *
 * 3. Move "Search for last name" text input to the right hand side
 *    and center vertically with the title "Users".
 */

export default function App() {
  const { users } = useUsers();

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div>
        <UsersList />
      </div>
    </div>
  );
}
