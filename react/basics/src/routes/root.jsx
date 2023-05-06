import { Link, Outlet } from "react-router-dom";
import routeLinks from "../utils/routeLinkConstant";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
        {routeLinks.length ? (
            <ul>
              {routeLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Nav</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}