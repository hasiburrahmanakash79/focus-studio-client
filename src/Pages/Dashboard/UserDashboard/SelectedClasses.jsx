import Swal from "sweetalert2";
import useAddToCart from "../../../Hook/useAddToCart";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const SelectedClasses = () => {
  useTitle("User Dashboard");
  const [classes, refetch] = useAddToCart();

  const handDeleteClass = (selected) => {
    console.log(selected._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${selected._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            //   console.log(data);
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="p-5">
      <SectionTitle
        title={"Your Selected Classes"}
        subTitle={"Learn more & more for your future"}
      ></SectionTitle>
      <div className="overflow-x-auto rounded-xl">
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
                      <img src={selected?.image} />
                    </div>
                  </div>
                </td>
                <td className="text-lg font-bold">{selected?.name}</td>
                <td>Instructor Name: {selected?.instructor_name}</td>
                <td className="text-yellow-600">${selected?.price}</td>
                <td>
                  <button className="btn-primary p-2 rounded">Pay</button>
                </td>
                <td>
                  <button
                    onClick={() => handDeleteClass(selected)}
                    className="btn-error p-2 rounded"
                  >
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
