import useClasses from "../../../Hook/useClasses";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageClass = () => {
  useTitle("ManageClass");

  const [classes, refetch] = useClasses();

  console.log(classes);

  return (
    <div>
      <SectionTitle title={"manage Class"}></SectionTitle>
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
              {classes.map((courses, index) => (
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
                  <button className="btn bg-red-500">Remove</button>
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

export default ManageClass;
