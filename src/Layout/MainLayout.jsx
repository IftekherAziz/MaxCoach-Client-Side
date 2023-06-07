import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="md:min-h-[calc(100vh-350px)] max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
