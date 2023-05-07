import { useUsers } from "../../hooks/useUsers";
import "./Header.css";

export default function Header() {
  const { setQuery } = useUsers();
  const onQueryChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div className="header">
      <div>
        <h1>Users</h1>
      </div>
      <div className="input-wrapper">
        <input
          className="input"
          type="search"
          name="q"
          placeholder="Search for last name"
          onChange={onQueryChange}
        />
      </div>
    </div>
  );
}
