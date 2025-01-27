import React from "react";
import { GrUserAdmin } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";
import { MdManageAccounts, MdOutlinePayments } from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <>
        <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200">
          <GrUserAdmin size={24} />
          <NavLink to="/dashboard/adminProfile" className="mx-4 font-medium ">
            Admin Profile
          </NavLink>
        </a>

        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <MdManageAccounts size={24} />

          <NavLink to="/dashboard/manageMember" className="mx-4 font-medium">
            Manage Member
          </NavLink>
        </a>
        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <HiSpeakerphone size={20} />

          <NavLink
            to="/dashboard/makeAnnouncement"
            className="mx-4 font-medium"
          >
            Announcement
          </NavLink>
        </a>
        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <VscGitPullRequestGoToChanges size={24} />

          <NavLink
            to="/dashboard/agreementRequest"
            className="mx-4 font-medium"
          >
            Agreement
          </NavLink>
        </a>
        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <RiCoupon3Fill size={24} />

          <NavLink to="/dashboard/manageCoupons" className="mx-4 font-medium">
            Manage Coupons
          </NavLink>
        </a>
        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <MdOutlinePayments size={24} />
          <NavLink
            to="/dashboard/allPaymentHistory"
            className="mx-4 font-medium"
          >
            Payment History
          </NavLink>
        </a>

        <hr className="my-6 border-gray-200 dark:border-gray-600" />
      </>
    </div>
  );
};

export default Admin;
