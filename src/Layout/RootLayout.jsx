import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/CommonPage/Navbar";
import Footer from "../Pages/CommonPage/Footer";
import Banner from "../Pages/HomePage/Banner";

const RootLayout = () => {
  const location = useLocation();
  // console.log(location);
  // const noHeaderFooter = location.pathname.includes('login')||
  location.pathname.includes("signup");
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
