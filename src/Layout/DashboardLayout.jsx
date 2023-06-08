import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
import { NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="md:min-h-[calc(100vh-350px)] max-w-7xl mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content text-center my-8">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="border rounded mt-10 px-3 py-2 cursor-pointer bg-zinc-50  drawer-button lg:hidden "
            >
              Dashboard Menu
            </label>
            <div className="mt-8">
              <Outlet></Outlet>
            </div>
            
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-zinc-50 text-black">
              {/* Sidebar content here */}
              <div className="text-2xl font-medium">Dashboard</div>
              <div className="divider"></div>
              <li>
                <NavLink to="/dashboard/manage-classes">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
              </li>       
              <li>
                <NavLink to="/dashboard/add-class">Add A Class</NavLink>
              </li>       
              <li>
                <NavLink to="/dashboard/my-classes">My Classes</NavLink>
              </li>       
              <li>
                <NavLink to="/dashboard/enrolled-classes">Enrolled Classes</NavLink>
              </li>       
              <li>
                <NavLink to="/dashboard/selected-classes">Selected Classes</NavLink>
              </li>       
              <li>
                <NavLink to="/dashboard/payment">Make Payment</NavLink>
              </li>       
              <li>
                <NavLink to="/dashboard/Payment-history">Payment History</NavLink>
              </li>       
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
