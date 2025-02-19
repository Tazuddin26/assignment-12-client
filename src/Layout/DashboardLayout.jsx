import { BiBuildingHouse } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hook/useAuth";
import UseAgreement from "../Hook/useAgreement";
import UseAdmin from "../Hook/useAdmin";
import Admin from "./sidebar/Admin";
import Member from "./sidebar/Member";
import User from "./sidebar/User";
import UseRole from "../Hook/useRole";
import { IoHomeSharp } from "react-icons/io5";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { useState } from "react";

const DashboardLayout = () => {
  const { user } = UseAuth();
  const [agreement] = UseAgreement();
  const [role] = UseRole();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //TODO : pending
  const { isLoading } = UseAdmin();
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  if (isLoading) {
    return <div className="flex justify-center text-red-700">Loading...</div>;
  }
  return (
    <div className="lg:flex justify-between ">
      <div className="">
        <aside
          className={`lg:flex flex-col w-64 fixed inset-0 z-50 min-h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <div>
            <BiBuildingHouse size={38} className="text-green-600" />
            <p className="font-abel text-2xl text-white">Dream Rent</p>
          </div>

          <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="space-y-4">
              {role === "member" && <Member />}
              {role === "admin" && <Admin />}
              {role !== "member" && role !== "admin" && <User />}

              <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200">
                <IoHomeSharp size={20} />
                <NavLink to="/" className="mx-4 font-medium ">
                  Back Home
                </NavLink>
              </a>
            </nav>

            <a className="flex items-center px-4 -mx-2 mt-5">
              <img
                className="object-cover mx-2 rounded-full h-9 w-9"
                src={user?.photoURL}
                alt="avatar"
              />
              <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                {user?.displayName}
              </span>
            </a>
          </div>
        </aside>
      </div>

      {/* Dashboard Content */}
      <div className="lg:w-10/12 justify-end bg-gray-100 dark:bg-gray-100">
        <div className="px-6">
          {" "}
          <DashboardNavbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className="lg:p-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
