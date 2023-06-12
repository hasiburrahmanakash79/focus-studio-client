import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageClass = () => {
  useTitle("ManageClass");
  return (
    <div>
      <SectionTitle title={"manage Class"}></SectionTitle>
      <div className="p-5">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Instructor Name</th>
                <th>Email</th>
                <th>Total seat</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClass;
