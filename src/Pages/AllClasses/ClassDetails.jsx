import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAddToCart from "../../Hook/useAddToCart";
import useEnrollClass from "../../Hook/useEnrollClass";

const ClassDetails = ({ tutorial }) => {
  const [enroll] = useEnrollClass();
  const [classes] = useAddToCart();
  const { name, image, instructor_name, available_seat, price, _id } = tutorial;
  const matched = enroll.find((enrollClass) => enrollClass.enrollID == _id);
  const selected = classes.find((selectedClass) => selectedClass.id == _id);
  console.log(matched, "..............Match");
  console.log(enroll);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useAddToCart();

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
      fetch("https://focus-studio-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addItem),
      })
        .then((res) => res.json())
        .then((data) => {
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

  const handleSelect = () => {
    Swal.fire({
      title: "You all ready select this course. You can done your payment",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <div className="border p-3 hover:shadow-xl hover:border-2 rounded-md">
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
        {matched ? (
          <Link to="/yourClass">
            <button
              className="btn btn-sm btn-secondary  my-3"
            >
              You All ready buy this course
            </button>
          </Link>
        ) : (
          <div>
            {selected ? (
              <Link>
                <button
                  onClick={() => handleSelect()}
                  className="btn btn-sm btn-warning my-3"
                >
                  Selected
                </button>
              </Link>
            ) : (
              <div>
                {available_seat === 0 ? (
                  <button className="btn btn-sm btn-disabled my-3">
                    Select Class
                  </button>
                ) : (
                  <Link>
                    <button
                      onClick={() => handleSelectClass(tutorial)}
                      className="btn btn-sm btn-primary my-3"
                    >
                      Select Class
                    </button>
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassDetails;
