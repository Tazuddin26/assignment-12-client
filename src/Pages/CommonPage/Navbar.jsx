import React, { useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import UseAdmin from "../../Hook/useAdmin";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin, isMember, isLoading } = UseAdmin();
  // const [isMember,isMemberLoading] = UseMember();

  // console.log("isAdmin:", isAdmin);
  // console.log("isMember:", isMember);
  const handleLogout = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <nav
        x-data="{ isOpen: false }"
        className="relative shadow-md shadow-green-700"
      >
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div>
                <BiBuildingHouse size={38} className="text-green-800" />
                <p className="font-abel text-2xl">Dream Rent</p>
              </div>
              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="  "
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <RxCross1 size={24} />
                  ) : (
                    <HiOutlineMenuAlt4 size={24} />
                  )}
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              //    className="relative w-full lg:w-auto lg:flex lg:items-center"
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-sky-100 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 font-tauri text-lg">
                <a className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0  ">
                  Join Slack
                </a>
                <Link
                  to="/"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 "
                >
                  Home
                </Link>
                <Link
                  to="/apartments"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  "
                >
                  Apartments
                </Link>
                {user && isAdmin && (
                  <Link to="/dashboard/adminProfile">Dashboard</Link>
                )}
                {user && isMember && (
                  <Link to="/dashboard/memberProfile">Dashboard</Link>
                )}
                {user && !isAdmin && !isMember ? (
                  <Link to="/dashboard/agreement">Dashboard</Link>
                ) : null}
                {user ? (
                  <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogout} className="btn btn-warning">
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 "
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                  className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <IoIosNotificationsOutline size={24} />
                </button>

                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2  lg:hidden">Khatab wedaa</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
