import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import UseAllAgreements from "../Hook/useAllAgreements";

const DashboardNavbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [agreement] = UseAllAgreements();
  return (
    <nav className="relative bg-white  dark:bg-gray-100 ">
      <div className="container px-6 py-4 mx-auto inset-x-0 flex items-center justify-end">
        <div className=" border flex items-center justify-end">
          {/* <!-- Mobile menu button --> */}

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        </div>
        <div className="inset-x-0 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex text-end space-x-4 md:flex-row md:mx-6">
            <a className="my-2 mx-4  relative text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none md:mx-4 md:my-0">
              <IoIosNotificationsOutline size={28} className=" text-gray-800" />
              <span className="absolute w-4 h-4 p-2 border -top-1 text-pink-600 font-bold  text-sm bg-green-200 rounded-full items-center flex justify-center">
                {agreement.length}
              </span>
            </a>
            
          </div>

          {/* <div className="flex justify-center md:block">
            <a
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-800 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </a>
          </div> */}
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
