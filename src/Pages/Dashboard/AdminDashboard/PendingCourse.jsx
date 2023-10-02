import { FcCheckmark } from "react-icons/fc";
import useClasses from "../../../Hook/useClasses";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PendingCourse = () => {
  useTitle("PendingClass");

  const [classes, refetch] = useClasses();
  const pendingCourse = classes.filter((course) => course.status === "pending");

  console.log(pendingCourse);

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
                  <td><div className="avatar">
                    <div className="w-16 rounded">
                      <img src={courses?.image} />
                    </div>
                  </div></td>
                  <td>{courses?.name}</td>
                  <td>{courses?.instructor_name}</td>
                  <td>{courses?.email}</td>
                  <td>{courses?.available_seat}</td>
                  <td>${courses?.price}</td>

                  <td className="text-2xl">
                    <button className="mr-5"><FcCheckmark/></button>
                    <button className="text-red-700">X</button>
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
