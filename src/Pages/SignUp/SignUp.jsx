import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL).then(() => {
          const savedUser = {
            name: data.name,
            email: data.email,
            photoURL: data.photoURL,
            role: "student",
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data.insertedId);
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const password = watch("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <Helmet>
        <title>MaxCoach | SignUp</title>
      </Helmet>
      <div className=" ">
        <div className=" flex-col md:flex-row-reverse m-10">
          <div className=" max-w-md mx-auto  border shadow-xl bg-zinc-50 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
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
                  {...register("photoURL", {
                    required: true,
                    pattern: {
                      value:
                        /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/,
                    },
                  })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && (
                  <span className="text-red-600">
                    Please enter a valid image URL
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </span>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === password,
                    })}
                    placeholder="Confirm Password"
                    className="input input-bordered w-full"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                  </span>
                </div>
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Please Confirm Your Password</p>
                )}
                {errors.confirmPassword?.type === "validate" && (
                  <p className="text-red-600">Passwords did not match</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mb-6 font-medium">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-800">
                  Login Here
                </Link>{" "}
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
