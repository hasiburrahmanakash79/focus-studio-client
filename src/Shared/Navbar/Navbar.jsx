import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(
        Swal.fire({
          icon: "success",
          title: "Log Out Successful",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) => console.log(error));
  };
  const NavItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/contact">Contact us</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard </Link>
          </li>
          <div className="dropdown dropdown-end ml-5">
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            </div>

            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow bg-black text-white menu menu-compact dropdown-content rounded-box w-52"
            >
              <li>
                <Link className="justify-between w-full">
                  {user?.displayName}
                </Link>
              </li>
              <li>
                <Link className="w-full" onClick={handleLogout}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-2xl mx-auto bg-opacity-70 bg-black font-semibold text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <Link>
            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/TqNnpjX/Logo-SILVER.png"
                className="w-10 ms-3"
              />
              <p className="text-xl font-semibold">Focus Studio</p>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
