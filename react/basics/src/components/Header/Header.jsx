import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>Users</h1>
      </div>
      <div className="input-wrapper">
        <input className="input" type="search" name="q" placeholder="Search for last name" />
      </div>
    </div>
  );
}
