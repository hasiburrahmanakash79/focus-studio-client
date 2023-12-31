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
import InstructorRoute from "./InstructorRoute";
import ManageClass from "../Pages/Dashboard/AdminDashboard/ManageClass";
import UserCertificate from "../Pages/Dashboard/AdminDashboard/UserCertificate";
import Certificate from "../Pages/Dashboard/UserDashboard/Certificate";
import PendingCourse from "../Pages/Dashboard/AdminDashboard/PendingCourse";
import Blogs from "../Pages/Blogs/Blogs";
import WriteBlogs from "../Pages/Dashboard/InstructorDashboard/WriteBlogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/instructor",
        element: <AllInstructors/>,
      },
      {
        path: "/classes",
        element: <AllClasses/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/certificate/:id",
        element: <Certificate/>
      },
      {
        path: '/yourClass',
        element: <EnrollClass/>
      },
      {
        path: '/blog',
        element: <Blogs/>
      },
      {
        path: '/blog/:id',
        element: <BlogDetails/>
      },
      {
        path: "contact",
        element: <Contact/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signUp",
    element: <SignUp/>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
    ),
    children: [
      {
        path: "selected",
        element: <SelectedClasses/>,
      },
      {
        path: "userProfile",
        element: <UserProfile/>,
      },
      {
        path: "enroll",
        element: <EnrollClass/>,
      },
      {
        path: "history",
        element: <PaymentHistory/>,
      },
      {
        path: "payment/:id",
        element: <Payment/>,
      },
      {
        path: "addReview",
        element: <AddReview/>,
      },
      

      //admin dashboard
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUsers/>
          </AdminRoute>
        ),
      },
      {
        path: "manageClass",
        element: (
          <AdminRoute>
            <ManageClass/>
          </AdminRoute>
        ),
      },
      {
        path: "approve",
        element: (
          <AdminRoute>
            <PendingCourse/>
          </AdminRoute>
        ),
      },
      {
        path: "makeCertificate",
        element: (
          <AdminRoute>
            <UserCertificate/>
          </AdminRoute>
        ),
      },

      // instructor Dashboard
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass/>
          </InstructorRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorRoute>
            <MyClasses/>
          </InstructorRoute>
        ),
      },
      {
        path: "writeBlog",
        element: (
          <InstructorRoute>
            <WriteBlogs/>
          </InstructorRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound/>,
  },
]);

export default router;
