import { useContext } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import useTitle from "../../../Hook/useTitle";

const AddReview = () => {
  useTitle("AddReview");

  const { user } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5">
      <SectionTitle title={"Give Review"}></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 p-10 rounded-lg md:w-1/3 mx-auto"
      >
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            defaultValue={user.displayName}
            placeholder="Type here"
            className="input w-full input-bordered border-white/20"
          />
        </div>
        <div className="md:grid grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <select
              {...register("star", { required: true })}
              className="select w-full bg-black  input-bordered border-white/20"
            >
              <option disabled selected>
                Pick One
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              defaultValue={user.email}
              placeholder="Type here"
              className="input w-full  input-bordered border-white/20"
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="Type here"
            className="input w-full  input-bordered border-white/20"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add Review"
            className="btn btn-outline order-none w-full my-5"
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
