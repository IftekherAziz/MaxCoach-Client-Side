import { Outlet } from "react-router-dom";
// import Header from "../Pages/Shared/Header";
// import Footer from "../Pages/Shared/Footer";

const DashboardLayout = () => {
  return (
    <div>
     {/*  <Header></Header> */}
      <div className="md:min-h-[calc(100vh-350px)] max-w-7xl mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content text-center my-8">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="border rounded mt-10 p-4 cursor-pointer bg-zinc-50 text-center  drawer-button lg:hidden"
            >
              Open Menu
            </label>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-zinc-50 text-black">
              {/* Sidebar content here */}
              <div className="text-2xl font-medium">Dashboard</div>
              <div className="divider"></div>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     {/*  <Footer></Footer> */}
    </div>
  );
};

export default DashboardLayout;
