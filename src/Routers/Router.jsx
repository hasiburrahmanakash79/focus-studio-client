import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../LogIn/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);

export default router;
