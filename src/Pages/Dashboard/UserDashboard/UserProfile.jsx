import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="m-24">
      
      <div className="flex items-center gap-5 border p-5 rounded-lg">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div>
            <h1 className="text-xl font-semibold text-blue-600">Name: {user?.displayName}</h1>
            <h1>Email: <span className="hover:underline">{user?.email}</span> </h1>
            <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
