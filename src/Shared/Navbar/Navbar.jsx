// import { Link } from "react-router-dom";
// import { FaBars, FaShoppingCart } from "react-icons/fa";
// // import { useContext } from "react";
// // import { AuthContext } from "../../../Provider/AuthProvider";
// // import Swal from "sweetalert2";
// // import useCart from "../../../Hook/useCart";

// const Navbar = () => {
//   // const { user, logOut } = useContext(AuthContext);
//   // const [cart] = useCart();

//   // const handleLogout = () => {
//   //   logOut()
//   //     .then(
//   //       Swal.fire({
//   //         icon: "success",
//   //         title: "Log Out Successful",
//   //         showConfirmButton: false,
//   //         timer: 1500,
//   //       })
//   //     )
//   //     .catch((error) => console.log(error));
//   // };
//   const NavItems = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact us</Link>
//       </li>
//       <li>
//         <Link to="/dashboard">Dashboard</Link>
//       </li>
//       <li>
//         <Link to="/menu">Our menu</Link>
//       </li>
//       <li>
//         <Link to="/shop">Our shop</Link>
//       </li>
//       <li>
//         <Link to="/dashboard/myCart">
//           <div className="indicator">
//             <FaShoppingCart></FaShoppingCart>
//             <span className="badge badge-sm indicator-item">
//               +0
//             </span>
//           </div>
//         </Link>
//       </li>
//       {user ? (
//         <div className="dropdown dropdown-end ml-5">
//           <div className="tooltip tooltip-left" data-tip={user?.displayName}>
//             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full">
//                 <img src={user.photoURL} />
//               </div>
//             </label>
//           </div>

//           <ul
//             tabIndex={0}
//             className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-black rounded-box w-52"
//           >
//             <li>
//               <Link className="justify-between w-full">
//                 {user?.displayName}
//               </Link>
//             </li>
//             <li>
//               <Link className="w-full" onClick={handleLogout}>
//                 Log Out
//               </Link>
//             </li>
//           </ul>
//         </div>
//       ) : (
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       )}
//     </>
//   );

//   return (
//     <div>
//       <div className="navbar fixed z-10 max-w-screen-2xl mx-auto bg-opacity-40 bg-black font-semibold text-white">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <FaBars />
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52"
//             >
//               {NavItems}
//             </ul>
//           </div>
//           <a className="btn btn-ghost normal-case text-xl">Heavenly feast</a>
//         </div>
//         <div className="navbar-end hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{NavItems}</ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
