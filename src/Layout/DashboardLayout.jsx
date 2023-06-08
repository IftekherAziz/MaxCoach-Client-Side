// import Header from "../Pages/Shared/Header";
// import Footer from "../Pages/Shared/Footer";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaUsers,
  FaSchool,
  FaLandmark,
  FaLayerGroup,
  FaBookReader,
  FaBookmark,
  FaDonate,
  FaHistory,
  FaHome,
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div>
      {/*  <Header></Header> */}
      <div className="min-h-screen max-w-7xl mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  py-5 border border-l-0 shadow-sm">
            {/* Page content here */}
            <div className="text-center">
              <label
                htmlFor="my-drawer"
                className="border rounded mt-10 px-3 py-2 cursor-pointer bg-zinc-50  drawer-button lg:hidden "
              >
                Dashboard Menu
              </label>
            </div>

            <div className="mt-8  mx-10">
              <Outlet></Outlet>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 h-full bg-zinc-50 shadow-xl text-black">
              {/* Sidebar content here */}
              <div className="text-2xl font-medium">Dashboard</div>
              <div className="divider"></div>
              <li className="mb-1">
                <NavLink to="/dashboard/manage-classes">
                  <FaSchool></FaSchool>Manage Classes
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/manage-users">
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/add-class">
                  <FaLandmark></FaLandmark>Add A Class
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/my-classes">
                  <FaLayerGroup></FaLayerGroup>My Classes
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/enrolled-classes">
                  <FaBookReader></FaBookReader>Enrolled Classes
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/selected-classes">
                  <FaBookmark></FaBookmark>Selected Classes
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/payment">
                  <FaDonate></FaDonate>Make Payment
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/dashboard/Payment-history">
                  <FaHistory></FaHistory>Payment History
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/">
                  <FaHome></FaHome>Back to Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DashboardLayout;
