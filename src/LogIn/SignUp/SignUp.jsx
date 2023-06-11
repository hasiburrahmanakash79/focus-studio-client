import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useTitle from "../../Hook/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  useTitle("SignUp");
  const [passShow, setPassShow] = useState(false);
  const { signUpUser, updateUserInfo } = useContext(AuthContext);
  // const [matchPass, setMatchPass] = useState()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    signUpUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      navigate(from, { replace: true });
      console.log(loggedUser);

      updateUserInfo(data.name, data.photo)
        .then(() => {
          const userInfo = {
            displayName: data.name,
            email: data.email,
            photoURL: data.photo,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                navigate(from, { replace: true });
                Swal.fire({
                  showConfirmButton: false,
                  timer: 2000,
                  title: "Login Successful",
                  icon: "success",
                });
              }
            });
        })
        .catch((error) => console.log(error.message));
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="md:flex justify-between items-center gap-12 px-3">
        <div className="md:w-1/2">
          <img src="https://i.ibb.co/jDMz1bj/login-page-banner.png" alt="" />
        </div>
        <div className="md:w-1/2 border rounded-lg bg-base-100">
          <div className=" text-center">
            <h1 className="text-3xl my-5 font-bold">SignUp</h1>
            <img
              className="w-16 mx-auto"
              src="https://i.ibb.co/NNQM1N7/image.png"
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="md:grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value:
                        /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                  type={passShow ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a className="label-text-alt link link-hover">
                    <p onClick={() => setPassShow(!passShow)}>
                      <small>
                        {passShow ? (
                          <span>Hide Pass</span>
                        ) : (
                          <span>Show Pass</span>
                        )}
                      </small>
                    </p>
                  </a>
                </label>
                {errors.password && <span>{errors.password.message}</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirm", {
                    required: "Confirm password field is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  type={passShow ? "text" : "password"}
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                {errors.confirm && <span>{errors.confirm.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  {...register("number", { required: true })}
                  type="number"
                  placeholder="+088"
                  className="input input-bordered"
                />
                {errors.number && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Enter your Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Sign Up</button>
            </div>
          </form>
          <div className="px-5 text-center">
            <div className="divider mt-0 "></div>
            <p className="font-semibold">Or Sign In with</p>
            <div className="flex items-center justify-center gap-4 my-2">
              <SocialLogin></SocialLogin>
            </div>
          </div>
          <div className="text-center mb-7">
            <Link to="/login">
              Have an account?{" "}
              <span className="text-yellow-700 font-bold">LogIn</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
