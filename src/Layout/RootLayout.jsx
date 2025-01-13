import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();
  // console.log(location);
  // const noHeaderFooter = location.pathname.includes('login')||
  location.pathname.includes("signup");
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
