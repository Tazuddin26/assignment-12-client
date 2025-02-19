import React, { useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  IoIosLogIn,
  IoIosLogOut,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import UseAdmin from "../../Hook/useAdmin";
import { TbRuler2Off } from "react-icons/tb";
import UseAgreement from "../../Hook/useAgreement";
import UseAllAgreements from "../../Hook/useAllAgreements";
import UseRole from "../../Hook/useRole";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
  const [agreement] = UseAllAgreements();
  const [role] = UseRole();

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { isAdmin, isMember, isLoading } = UseAdmin();
  const handleLogout = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" ">
      <nav className="relative  ">
        <div className=" fixed z-10 bg-opacity-30 w-full  scr top-0">
          <div className="lg:flex lg:items-center lg:justify-between bg-gray-800 px-6 py-4 shadow-md shadow-green-800 ">
            <div className="flex items-center justify-between">
              <div>
                <BiBuildingHouse size={38} className="text-green-600 " />
                <p className="font-abel text-2xl dark:text-white">Dream Rent</p>
              </div>
              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="  "
                  aria-label="toggle menu"
                >
                  {open ? (
                    <RxCross1 size={24} className="dark:text-white" />
                  ) : (
                    <HiOutlineMenuAlt4 size={24} className="dark:text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out dark:bg-gray-800  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                open
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 font-tauri text-lg">
                <Link
                  to="/"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors dark:text-white duration-300 transform rounded-md lg:mt-0 "
                >
                  Home
                </Link>
                <Link
                  to="/apartments"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-white transition-colors duration-300 transform rounded-md lg:mt-0  "
                >
                  Apartments
                </Link>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                  className=" mx-4  relative text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <IoIosNotificationsOutline
                    size={32}
                    className="dark:text-yellow-300 "
                  />
                </button>{" "}
                {role === "admin" ? (
                  <span className="absolute w-4 h-4 p-2 border lg:top-2 lg:left-80 left-14 top-32 text-pink-600 font-bold  text-sm bg-green-200 rounded-full items-center flex justify-center">
                    {agreement.length}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="relative inline-block ">
                {/* <!-- Dropdown toggle button --> */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-10 block p-2"
                >
                  <div className="relative">
                    <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-600 ring-1 ring-white"></span>
                    <img
                      className="object-cover w-12 h-12 rounded-full alt-text-sm  ring ring-green-300 dark:ring-lime-500"
                      src={user?.photoURL}
                      alt="noUser"
                    />
                  </div>
                </button>

                {/* <!-- Dropdown menu --> */}
                {isOpen && (
                  <div
                    x-transition:enter="transition ease-out duration-100"
                    x-transition:enter-start="opacity-0 scale-90"
                    x-transition:enter-end="opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-100"
                    x-transition:leave-start="opacity-100 scale-100"
                    x-transition:leave-end="opacity-0 scale-90"
                    className="absolute lg:right-0  z-20 w-64 lg:mt-6 overflow-hidden origin-top-right  bg-white border border-green-600  rounded-md shadow-lg sm:w-80 dark:bg-gray-800"
                  >
                    <div className="py-2">
                      <a className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                        <img
                          className="flex-shrink-0 object-cover w-10 h-10 mx-1 rounded-full bg-gray-600"
                          src={user?.photoURL}
                          alt=""
                        />
                        <p className="mx-2 text-xl font-abel text-gray-600 dark:text-white">
                          <span className="font-bold">{user?.displayName}</span>
                        </p>
                      </a>
                      <div className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                        <p className="mx-2 text-xl font-abel text-gray-600 dark:text-white">
                          <span className="font-bold">
                            {user && isAdmin && (
                              <Link
                                to="/dashboard/adminProfile"
                                className="flex items-center gap-2"
                              >
                                <MdDashboard
                                  size={20}
                                  className="text-green-600"
                                />
                                Dashboard
                              </Link>
                            )}
                            {user && isMember && (
                              <Link to="/dashboard/memberProfile">
                                Dashboard
                              </Link>
                            )}
                            {user && !isAdmin && !isMember ? (
                              <Link to="/dashboard/agreement">Dashboard</Link>
                            ) : null}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                        <p className="mx-2 text-xl font-abel text-gray-600 dark:text-white">
                          <span className="font-bold font-abel">
                            {user ? (
                              <>
                                <button
                                  onClick={handleLogout}
                                  className="flex w-full items-center gap-3 px-6 py-1 hover:bg-pink-600 rounded-md dark:bg-green-500"
                                >
                                  Log Out
                                  <IoIosLogOut
                                    size={24}
                                    className="text-gray-800 font-bold hover:text-yellow-500"
                                  />
                                </button>
                              </>
                            ) : (
                              <>
                                <Link
                                  to="/login"
                                  className="px-6 flex items-center text-xl font-abel gap-4 py-2  hover:bg-blue-500 rounded-md dark:bg-green-500"
                                >
                                  <IoIosLogIn
                                    size={26}
                                    className="text-gray-800 font-bold hover:text-amber-500"
                                  />
                                  Login
                                </Link>
                              </>
                            )}
                          </span>
                        </p>
                      </div>
                    </div>
                    <a className="block py-4  font-bold text-center text-white bg-gray-800 dark:bg-green-700 hover:underline"></a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
