
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Counter from '../components/Counter/Counter.js';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact, {
  loader as contactLoader,
} from "../routes/contacts/contact";
import EditContact, {
  action as editAction,
} from "../routes/contacts/edit";
import ContactRoot, {
  action as contactAction,
  loader as contactRootLoader,
} from "../routes/contacts/root";
import Root from "../routes/root";
import Users from "../routes/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/users",
        element: <Users />,
      }
    ],
  },
  {
    path: "/contacts",
    element: <ContactRoot />,
    errorElement: <ErrorPage />,
    loader: contactRootLoader,
    action: contactAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

export default router;