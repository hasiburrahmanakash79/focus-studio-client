import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/SocialLogin/SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const { logInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          showConfirmButton: false,
          timer: 2000,
          title: "Login Successful",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
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
            <h1 className="text-3xl my-5 font-bold">Login</h1>
            <img
              className="w-16 mx-auto"
              src="https://i.ibb.co/NNQM1N7/image.png"
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              {...register("password", { required: true })}
                type={passShow ? "text" : "password"}
                placeholder="enter your password"
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
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Login</button>
            </div>
          </form>
          <div className="text-center mb-7 px-5">
            <div className="divider"></div>
            <p className="font-semibold">Or Sign In with</p>
            <div className="flex items-center justify-center gap-4 my-2">
              <SocialLogin></SocialLogin>
            </div>
            <Link to="/signUp">
              Do not have an account?{" "}
              <span className="text-blue-500 font-bold">SignUp</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
