import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi"; 
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(""); // State variable for error message
  const [showPassword, setShowPassword] = useState(false); // State variable for password visibility

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // User login with email and password
  const handleLogin = (data) => {
    // Sign in user with email and password
    signIn(data.email, data.password)
      .then((userCredential) => {
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        // console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Invalid email or password"); // Set the error message
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); // Toggle the password visibility state
  };

  return (
    <>
      <Helmet>
        <title>MaxCoach | Login</title>
      </Helmet>
      <div className="m-10">
        <div className="max-w-md bg-zinc-50 mx-auto border shadow-xl rounded-md">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            {errorMessage && (
              <div className="text-red-600">{errorMessage}</div> // Display the error message
            )}
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
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="input input-bordered w-full "
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 focus:outline-none"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}{" "}
                  {/* Icon for password visibility toggle */}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-6 font-medium">
            <small>
              New Here?{" "}
              <Link to="/signup" className="text-blue-800">
                Create an account
              </Link>{" "}
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Login;
