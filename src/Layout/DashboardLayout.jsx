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
  FaHome,
} from "react-icons/fa";
import useUser from "../Hooks/useUser";

const DashboardLayout = () => {
  const [userFromDB] = useUser();
  const role = userFromDB?.role;
  if (!role) {
    return <></>;
  }
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content py-5 lg:pt-0 border border-l-0 shadow-sm">
          {/* Page content here */}
          <div className=" font-medium  text-center">
            <label
              htmlFor="my-drawer"
              className="border rounded mt-10 px-3 py-2 cursor-pointer bg-zinc-50  drawer-button lg:hidden "
            >
              Menu
            </label>
          </div>
          <div className="mt-6 md:mt-4 px-0 md:px-10">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side shadow-xl bg-teal-800  text-white">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80   ">
            {/* Sidebar content here */}
            <div className="text-2xl font-medium ml-1">Dashboard</div>
            <div className="divider"></div>
            {role === "admin" ? (
              <>
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
              </>
            ) : role === "instructor" ? (
              <>
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
              </>
            ) : role === "student" ? (
              <>
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
               {/*  <li className="mb-1">
                  <NavLink to="/dashboard/payment">
                    <FaDonate></FaDonate>Make Payment
                  </NavLink>
                </li> */}
                <li className="mb-1">
                  <NavLink to="/dashboard/Payment-history">
                    <FaDonate></FaDonate>Payment History
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
            <>
              <div className="divider"></div>
              <li className="mb-1">
                <NavLink to="/instructors">
                  <FaUsers></FaUsers>All Instructors
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/classes">
                  <FaSchool></FaSchool>All Classes
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/">
                  <FaHome></FaHome>MaxCoach Home
                </NavLink>
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
