import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Handle google login:
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
       Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Login successfully.",
         showConfirmButton: false,
         timer: 1500,
       });
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <p className="text-sm text-center font-medium">Or Sign In With</p>
      <div className="w-full text-center my-2 pb-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
