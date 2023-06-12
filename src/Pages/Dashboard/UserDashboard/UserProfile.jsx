import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAddToCart from "../../../Hook/useAddToCart";
import { Link } from "react-router-dom";
import useTitle from "../../../Hook/useTitle";

const UserProfile = () => {
  useTitle('Profile')
  const { user } = useContext(AuthContext);
  const [classes] = useAddToCart()
  return (
    <div className="md:p-24 p-3">
      
      <div className="flex items-center gap-5 border p-5 rounded-lg">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div>
            <h1 className="text-xl font-semibold text-blue-600">Name: {user?.displayName}</h1>
            <h1>Email: <span className="hover:underline">{user?.email}</span> </h1>
        </div>
      </div>
      <div className="my-5">
        <p><span>Dear, {user?.displayName}</span>. You already selected our {classes.length} Courses. If you enroll any course please visit <Link to="/dashboard/selected" className="text-blue-500 underline">Selected classes.</Link></p>
      </div>
    </div>
  );
};

export default UserProfile;
