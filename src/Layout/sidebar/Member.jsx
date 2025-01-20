import React from 'react';
import { ImProfile } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const Member = () => {
    return (
        <div>
             <>
                  <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200">
                    <ImProfile size={20} />
                    <NavLink
                      to="/dashboard/memberProfile"
                      className="mx-4 font-medium "
                    >
                      My Profile
                    </NavLink>
                  </a>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                    <NavLink
                      to="/dashboard/payment"
                      className="mx-4 font-medium"
                    >
                      Make Payment
                    </NavLink>
                  </a>

                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                    <NavLink
                      to="/dashboard/paymentHistory"
                      className="mx-4 font-medium"
                    >
                      Payment History
                    </NavLink>
                  </a>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                    <NavLink
                      to="/dashboard/memberAnnounce"
                      className="mx-4 font-medium"
                    >
                      Announcement
                    </NavLink>
                  </a>
                  <hr className="my-6 border-gray-200 dark:border-gray-600" />
                </>
        </div>
    );
}

export default Member;
