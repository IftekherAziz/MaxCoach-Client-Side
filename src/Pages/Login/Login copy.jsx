import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";

  // User login with email and password
  const handleLogin = (data) => {
  
    // Sign in user with email and password
    signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
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
      })
  };

  return (
    <>
      <Helmet>
        <title>MaxCoach | Login</title>
      </Helmet>
      <div className="p-10 m-10">
        <div className=" max-w-md bg-zinc-50 mx-auto border shadow-xl">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="input input-bordered"
              />
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
        </div>
      </div>
    </>
  );
};

export default Login;
