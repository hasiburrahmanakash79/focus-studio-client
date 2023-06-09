import { useQuery } from "react-query";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  useTitle("Manage User");

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: `${user.displayName} is admin now`,
            icon: "success",
          });
        }
      });
  };

  const handleInstructor = (user) => {
    console.log("instructor");
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: `${user.displayName} is admin now`,
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="p-5">
      <SectionTitle
        subTitle={"Happy user"}
        title={"manage user"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-slate-200">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>
                  <div className="avatar online">
                    <div className="w-10 border-2 border-green-600 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "ADMIN"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn btn-outline btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "INSTRUCTOR"
                  ) : (
                    <button
                      onClick={() => handleInstructor(user)}
                      className="btn btn-outline btn-xs"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button className="text-white bg-red-700 p-2 rounded">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
