import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../LogIn/Login";
import SignUp from "../LogIn/SignUp/SignUp";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  }
]);

export default router;
