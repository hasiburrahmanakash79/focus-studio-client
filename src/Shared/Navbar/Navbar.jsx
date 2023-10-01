import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const dark = localStorage.getItem("customDarkTheme");
  console.log(dark);
  const [isDarkMode, setIsDarkMode] = useState(dark == "true" ? true : false);

  useEffect(() => {
    if (isDarkMode == true) {
      localStorage.removeItem("customDarkTheme");
      localStorage.setItem("customDarkTheme", "true");

      document.documentElement.removeAttribute("data-theme");
      document.documentElement.setAttribute("data-theme", "customDarkTheme");
    } else {
      localStorage.removeItem("customDarkTheme");
      localStorage.setItem("customDarkTheme", "false");

      document.documentElement.removeAttribute("data-theme");
      document.documentElement.setAttribute("data-theme", "customLightTheme");
    }
  }, [isDarkMode, dark]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Our Courses</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <div className="bg-opacity-70 bg-black backdrop-blur-md navbar fixed z-10 text-white">
      <div className="container mx-auto">
        <div className="navbar-start flex items-center">
          <div className="dropdown  lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
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
              <p className="text-xl font-semibold">Studio Focus </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center  hidden md:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
        <div className="navbar-end flex items-center justify-end gap-5 mr-5">
          {user ? (
            <>
              <div className="dropdown dropdown-end ml-5">
                <div
                  className="tooltip tooltip-left"
                  data-tip={user?.displayName}
                >
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
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
                    <Link to="/dashboard">Dashboard </Link>
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
            <>
              <Link className="btn btn-sm btn-primary" to="/login">Login</Link>
            </>
          )}
          <div>
            <button onClick={toggleDarkMode} className="mt-2 text-lg">
              {isDarkMode == true ? (
                <FaSun className=""></FaSun>
              ) : (
                <FaMoon></FaMoon>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
