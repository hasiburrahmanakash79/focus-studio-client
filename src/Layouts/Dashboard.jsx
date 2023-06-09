import { FcClapperboard, FcBusinessman, FcAddDatabase, FcCamera, FcHome, FcApprove, FcBookmark, FcConferenceCall, FcContacts, FcLike, FcCurrencyExchange, FcApproval } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import useTitle from "../Hook/useTitle";

const Dashboard = () => {
  useTitle('Dashboard')

    const isAdmin = true

  return (
    <div>
      <div className="drawer md:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className=" my-6">
              <h1 className="text-4xl font-semibold flex items-center gap-2">Focus Studio <FcCamera></FcCamera></h1>
              <p>Best Photography teaching platform</p>
            </div>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/">
                    <FcHome></FcHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addClass">
                    <FcAddDatabase></FcAddDatabase> Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FcBookmark></FcBookmark> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FcBusinessman></FcBusinessman> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUser">
                    <FcConferenceCall></FcConferenceCall> All User
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">
                    <FcHome></FcHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myCart">
                  <FcApproval></FcApproval> Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                  <FcApprove></FcApprove> Enrolled  Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FcCurrencyExchange></FcCurrencyExchange> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
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
