import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut, theme, setTheme } = useContext(AuthContext);

  // Handle logout:
  const handleLogout = () => {
    logOut()
      .then(() => {
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Successfully logged out.",
           showConfirmButton: false,
           timer: 1500,
         });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      {user && user.email && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/">
              <img
                className="w-40"
                src="https://i.ibb.co/wp4n6bT/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
          </div>

          <div className="navbar-end mr-4">
            <li className="list-none">
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-neutral mr-4"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-sm btn-neutral mr-4">
                    Login
                  </Link>
                </>
              )}
            </li>
            {user && (
              <div>
                <label
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <div className="rounded-full border ">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt="Image" />
                    ) : (
                      <img
                        src="https://i.ibb.co/sRWsQmR/6073873.png"
                        alt="Image"
                      />
                    )}
                  </div>
                </label>
              </div>
            )}
            <div>
              <input
                onClick={() => setTheme(!theme)}
                type="checkbox"
                className="toggle ml-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
