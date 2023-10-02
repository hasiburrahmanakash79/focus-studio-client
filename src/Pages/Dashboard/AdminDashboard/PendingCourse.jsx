import { FcCheckmark } from "react-icons/fc";
import useClasses from "../../../Hook/useClasses";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const PendingCourse = () => {
  useTitle("PendingClass");

  const [classes, refetch] = useClasses();
  const pendingCourse = classes.filter((course) => course.status === "pending");

  // http://localhost:5000/
  const handleApproved = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/classes/approve/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1000,
            title: 'Approved',
            icon: "success",
          });
        }
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove this Course!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Deleted.",
                "success"
              );
            }
          });
      }
    });
  }

  return (
    <div>
      <SectionTitle title={"Approve Course"}></SectionTitle>
      <div className="p-5">
        <div className="overflow-x-auto rounded-xl">
          <table className="table">
            <thead className="bg-black text-white uppercase">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Instructor Name</th>
                <th>Email</th>
                <th>Total seat</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingCourse.map((courses, index) => (
                <tr key={courses?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded">
                        <img src={courses?.image} />
                      </div>
                    </div>
                  </td>
                  <td>{courses?.name}</td>
                  <td>{courses?.instructor_name}</td>
                  <td>{courses?.email}</td>
                  <td>{courses?.available_seat}</td>
                  <td>${courses?.price}</td>

                  <td className="text-2xl font-bold">
                    <button
                      onClick={() => handleApproved(courses._id)}
                      className="mr-5"
                    >
                      <FcCheckmark />
                    </button>
                    <button onClick={() => handleDelete(courses._id)} className="text-red-700">X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingCourse;
