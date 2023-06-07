import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../LogIn/Login";
import SignUp from "../LogIn/SignUp/SignUp";
import Home from "../Pages/HomeSection/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/classes",
        element: <AllClasses></AllClasses>
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
