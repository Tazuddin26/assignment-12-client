import React from "react";
import { FaHistory } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlinePayment } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Member = () => {
  return (
    <div>
      <>
        <div className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200">
          <ImProfile size={20} />
          <NavLink to="/dashboard/memberProfile" className="mx-4 font-medium ">
            Member Profile
          </NavLink>
        </div>
        <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <MdOutlinePayment size={20} />
          <NavLink to="/dashboard/payment" className="mx-4 font-medium">
            Make Payment
          </NavLink>
        </div>

        <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <FaHistory size={20}/>
          <NavLink to="/dashboard/paymentHistory" className="mx-4 font-medium">
            Payment History
          </NavLink>
        </div>
        <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <TfiAnnouncement size={20} />
          <NavLink to="/dashboard/memberAnnounce" className="mx-4 font-medium">
            Announcement
          </NavLink>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-600" />
      </>
    </div>
  );
};

export default Member;
