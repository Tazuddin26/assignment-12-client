import { HiSpeakerphone } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { NavLink } from "react-router-dom";

const User = () => {
  return (
    <div>
      
      <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200">
        <ImProfile size={20} />
        <NavLink to="/dashboard/agreement" className="mx-4 font-medium ">
          User Profile
        </NavLink>
      </a>
      <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <HiSpeakerphone size={20} />

        <NavLink to="/dashboard/announcement" className="mx-4 font-medium">
          Announcement
        </NavLink>
      </a>
    </div>
  );
};

export default User;
