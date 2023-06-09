import { NavLink, Outlet, useNavigation } from "react-router-dom";
import routeLinks from "../utils/routeLinkConstant";

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      <div id="sidebar">
        <h1>React Sample Code</h1>
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
                  <NavLink
                    to={link.url}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    {link.name}
                  </NavLink>
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