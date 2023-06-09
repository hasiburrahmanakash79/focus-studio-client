import useAddToCart from "../../../Hook/useAddToCart";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const SelectedClasses = () => {
  useTitle("User Dashboard");
  const [classes] = useAddToCart();

  return (
    <div>
      <SectionTitle
        title={"Your Selected Classes"}
        subTitle={"Learn more & more for your future"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-slate-200">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Course Title</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((selected, index) => (
              <tr key={selected?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src={selected?.image}
                      />
                    </div>
                  </div>
                </td>
                <td className="text-xl font-semibold">{selected?.name}</td>
                <td>Instructor Name: {selected?.instructor_name}</td>
                <td>${selected?.price}</td>
                <td>
                  <button className="btn-primary p-2 rounded">
                    Pay
                  </button>
                </td>
                <td>
                  <button className="btn-warning p-2 rounded">
                    Remove
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

export default SelectedClasses;
