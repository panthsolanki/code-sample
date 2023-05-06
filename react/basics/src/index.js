import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Counter from './components/Counter/Counter.js';
import './index.css';
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import reportWebVitals from './reportWebVitals';
import Contact, {
  loader as contactLoader,
} from "./routes/contacts/contact";
import ContactRoot, {
  action as contactAction,
  loader as contactRootLoader,
} from "./routes/contacts/root";
import Root from "./routes/root";

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
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
