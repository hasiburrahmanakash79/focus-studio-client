import {
  FcClapperboard,
  FcBusinessman,
  FcAddDatabase,
  FcHome,
  FcApprove,
  FcBookmark,
  FcContacts,
  FcLike,
  FcCurrencyExchange,
  FcApproval,
} from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import useTitle from "../Hook/useTitle";
import useAdmin from "../Hook/useAdmin";
import useRoleInstructor from "../Hook/useRoleInstructor";
import { FaBuffer } from "react-icons/fa";

const Dashboard = () => {
  useTitle("Dashboard");

  const [isAdmin] = useAdmin();
  const [isInstructor] = useRoleInstructor();

  return (
    <div>
      <div className="drawer md:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-800 text-white min-h-screen">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer"
            className="text-3xl drawer-button lg:hidden flex items-center gap-3 m-5"
          >
            <FaBuffer />Open
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className=" my-6">
            <img
                src="https://i.ibb.co/TqNnpjX/Logo-SILVER.png"
                className="w-32"
              />
            </div>
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/">
                    <FcHome></FcHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/makeCertificate">
                    <FcBookmark></FcBookmark> Manage user certificate
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClass">
                    <FcBookmark></FcBookmark> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUser">
                    <FcBusinessman></FcBusinessman> Manage Users
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink to="/">
                    <FcHome></FcHome> Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addClass">
                    <FcAddDatabase></FcAddDatabase> Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClass">
                    <FcBookmark></FcBookmark> My Classes
                  </NavLink>
                </li>
              </>
            )}
            {!isAdmin && !isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/userProfile">
                    <FcHome></FcHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/selected">
                    <FcApproval></FcApproval> Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enroll">
                    <FcApprove></FcApprove> Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FcCurrencyExchange></FcCurrencyExchange> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addReview">
                    <FcLike></FcLike> Add Review
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FcHome></FcHome> Home Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FcClapperboard></FcClapperboard> All Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/contact">
                <FcContacts></FcContacts> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
