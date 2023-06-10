import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAddToCart from "../../Hook/useAddToCart";

const ClassDetails = ({ tutorial }) => {
  const { name, image, instructor_name, available_seat, price, _id } =
    tutorial;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useAddToCart()

  const handleSelectClass = (tutorial) => {
    console.log(tutorial);
    if (user && user.email) {
      const addItem = {
        image,
        name,
        price,
        instructor_name,
        available_seat,
        email: user.email,
        id: _id,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Class has been added.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "If you want to added class you need to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="border p-3 rounded-md hover:border-yellow-300">
      <div className="avatar">
        <div className="w-full rounded">
          <img src={image} />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p>Instructor name: {instructor_name} </p>
        <p>Available seats: {available_seat} </p>
        <p>Price: ${price} </p>
      </div>
      <div className="text-end">
        <Link>
          <button
            onClick={() => handleSelectClass(tutorial)}
            className="btn btn-sm my-3"
          >
            Select Class
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassDetails;
