import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
// import ThemeToggle from "../Hook/ThemeToggle";
import UseAllAgreements from "../Hook/useAllAgreements";

const DashboardNavbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [agreement] = UseAllAgreements();
  return (
    <nav className="relative lg:border-b dark:border-green-500">
      <div className="container px- py-4 mx-auto inset-x-0 flex items-center justify-end">
        <div className=" border flex items-center justify-end">
          {/* <ThemeToggle /> */}
          {/* <!-- Mobile menu button --> */}

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        </div>
        <div className="inset-x-0 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex text-end space-x-4 md:flex-row md:mx-6">
            <a className="my-2 mx-4  relative transition-colors duration-300 transform lg:block  hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none md:mx-4 md:my-0">
              <IoIosNotificationsOutline size={28} className=" " />
              <span className="absolute w-4 h-4 p-2 border -top-1 text-pink-600 font-bold  text-sm bg-green-200 rounded-full items-center flex justify-center">
                {agreement.length}
              </span>
            </a>
          </div>
        </div>
        <div className=" lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            type="button"
            className=" text-gray-700 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
          >
            {isSidebarOpen ? (
              <RxCross1 size={24} className="dark:text-gray-800" />
            ) : (
              <HiOutlineMenuAlt4 size={24} className="dark:text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
