import { Link, NavLink } from "react-router-dom";

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
     <li>
       <NavLink to="/dashboard">Dashboard</NavLink>
     </li>
   </>
 );

const Header = () => {
  
    return (
      <div className="shadow-sm bg-white mb-5">
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
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
              <ul className="menu menu-horizontal px-1">{menuItems}</ul>
            </div>

            <div className="navbar-end mr-4">
              <div>
                <li className="list-none">
                  <Link to="/login">
                    <button className="btn rounded mr-4">Login</button>
                  </Link>
                </li>
              </div>
              <div>
                <label className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom">
                  <div className="rounded-full border">
                    <img
                      src="https://i.ibb.co/sRWsQmR/6073873.png"
                      alt="Image"
                    />
                  </div>
                </label>
              </div>
              <div>
                <input type="checkbox" className="toggle ml-5" checked />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;