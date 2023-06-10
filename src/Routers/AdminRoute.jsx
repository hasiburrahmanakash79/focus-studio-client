import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center m-32 md:m-96">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }}></Navigate>;
  }
};

export default AdminRoute;
