import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.PhotoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedIt) {
              console.log('user added to the data base');
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };
  // console.log(watch("example"))

  return (
    <>
      <Helmet>
        <title>Super-Shop | Sign Up</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Registration now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Enter your full name"
                    className="input input-bordered"
                    // required
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("PhotoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                    // required
                  />
                  {errors.PhotoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                    // required
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                    // required
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      Password must be 8 characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600">
                      Password must be less than 20 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      Password must be at least one uppercase, one lowercase,
                      one special character and one number and 8 or 20 total
                      characters.
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <p className="mx-auto mb-5 text-xl">
                <small>
                  {" "}
                  <Link to="/login">
                    Already have an account?{" "}
                    <span className=" text-blue-800">Please Login</span>
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
