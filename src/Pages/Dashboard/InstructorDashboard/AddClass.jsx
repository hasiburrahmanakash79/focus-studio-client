import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-5">
      <SectionTitle title={'add classes'}></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 p-10 rounded-lg w-full"
      >
        <div>
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Type here"
            className="input w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              {...register("instructor_name", { required: true })}
              type="text"
              defaultValue={user.displayName}
              placeholder="Type here"
              className="input w-full"
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
              className="input w-full"
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
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Available Seat</span>
            </label>
            <input
              {...register("available_seat", { required: true })}
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
          </div>
        </div>
        <div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full my-3"
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
