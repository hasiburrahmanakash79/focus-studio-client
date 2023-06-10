import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div><h1 className="text-center my-20 text-3xl">Loading...</h1></div>
    }
    if(user && isAdmin){
        return children;
    }
    else{
        return <Navigate to="/" state={{ from: location }}></Navigate>
    }
    
};

export default AdminRoute;