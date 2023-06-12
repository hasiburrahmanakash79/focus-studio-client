import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../LogIn/Login";
import SignUp from "../LogIn/SignUp/SignUp";
import Home from "../Pages/HomeSection/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import About from "../Pages/About/About";
import Dashboard from "../Layouts/Dashboard";
import Contact from "../Pages/Dashboard/Contact";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
import PrivateRoute from "./PrivateRoute";
import SelectedClasses from "../Pages/Dashboard/UserDashboard/SelectedClasses";
import UserProfile from "../Pages/Dashboard/UserDashboard/UserProfile";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import Payment from "../Pages/Dashboard/UserDashboard/Payment/Payment";
import AddReview from "../Pages/Dashboard/UserDashboard/AddReview";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory";
import EnrollClass from "../Pages/Dashboard/UserDashboard/EnrollClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructor",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "/classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "selected",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "enroll",
        element: <EnrollClass></EnrollClass>
      },
      {
        path: "history",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "addReview",
        element: <AddReview></AddReview>
      },

      //admin dashboard
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },

      // instructor Dashboard
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClasses></MyClasses>
      }
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default router;
