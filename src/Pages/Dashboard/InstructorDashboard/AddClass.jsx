import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useTitle from "../../../Hook/useTitle";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  useTitle("AddClass");

  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const Image_Hosting_Token = import.meta.env.VITE_image_hosting_apiKey;

  const { register, handleSubmit } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { name, price, instructor_name, email, available_seat } = data;
          const addClass = {
            name,
            price: parseInt(price),
            instructor_name,
            email,
            available_seat: parseInt(available_seat),
            image: imgURL,
            status: "pending",
          };
          axiosSecure.post("/classes", addClass).then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                title: "Item added Successful",
                icon: "success",
              });
            }
          });
        }
      });
  };

  return (
    <div className="p-5">
      <SectionTitle title={"add classes"}></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 md:w-1/2 mx-auto p-10 rounded-lg"
      >
        <div>
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Type here"
            className="input w-full input-bordered"
          />
        </div>
        <div className="md:grid grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              {...register("instructor_name", { required: true })}
              type="text"
              defaultValue={user.displayName}
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              defaultValue={user.email}
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Available Seat</span>
            </label>
            <input
              {...register("available_seat", { required: true })}
              type="number"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
        </div>
        <div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full my-3 input-bordered"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add Class"
            className="btn btn-outline order-none w-full my-5"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
