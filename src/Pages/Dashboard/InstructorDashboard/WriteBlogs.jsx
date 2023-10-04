import { useContext } from "react";
import useTitle from "../../../Hook/useTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const WriteBlogs = () => {
  useTitle("Blog");

  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const Image_Hosting_Token = import.meta.env.VITE_image_hosting_apiKey;

  const { register, handleSubmit, reset } = useForm();

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
          const image = imageResponse.data.display_url;
          const { title, writer_name, Writer_email, publish_date, description } = data;
          const addBlog = {
            title,
            writer_name,
            Writer_email,
            publish_date,
            description,
            image,
            status: "pending",
          };
          axiosSecure.post("/blogs", addBlog).then((data) => {
            if (data.data.insertedId) {
                reset()
              Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                title: "Blog added Successful",
                icon: "success",
              });
            }
          });
        }
      });
  };
  return (
    <div className="p-5">
      <SectionTitle title={"Write a Blog"}></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 md:w-1/2 mx-auto p-10 rounded-lg"
      >
        <div>
          <label className="label">
            <span className="label-text">Blog Title</span>
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Type here"
            className="input w-full input-bordered"
          />
        </div>
        <div className="md:grid grid-cols-2 gap-5">
          <div>
          <label className="label">
              <span className="label-text">Blog Image</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Publish Date</span>
            </label>
            <input
              {...register("publish_date", { required: true })}
              type="date"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text">Writer Name</span>
            </label>
            <input
              {...register("writer_name", { required: true })}
              type="text"
              defaultValue={user.displayName}
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Writer Email</span>
            </label>
            <input
              {...register("Writer_email", { required: true })}
              type="text"
              defaultValue={user.email}
              placeholder="Type here"
              className="input w-full input-bordered"
            />
          </div>
        </div>
        <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              rows={6}
              placeholder="Description"
              className="w-full p-3 bg-transparent border rounded-lg"
            />
          </div>

        <div>
          <input
            type="submit"
            value="Add Blog"
            className="btn btn-outline order-none w-full my-5"
          />
        </div>
      </form>
    </div>
  );
};

export default WriteBlogs;
