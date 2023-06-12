import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useRoleInstructor from "../Hook/useRoleInstructor";


const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
  const [instructors, isInstructorLoading] = useRoleInstructor();

  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <div className="flex justify-center items-center m-32 md:m-96">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user && instructors) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }}></Navigate>;
  }
};

export default InstructorRoute;