import { Navigate, useLocation } from "react-router";
import useUser from "../Hooks/useUser";

const StudentRoutes = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center text-center pt-20 ">
        <progress className="progress w-56 mt-12"></progress>
      </div>
    );
  }

  if (user && user.role === "student") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoutes;
