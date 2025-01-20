import { BiBuildingHouse } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hook/useAuth";
import UseAgreement from "../Hook/useAgreement";
import { MdManageAccounts } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { RiCoupon3Fill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import UseAdmin from "../Hook/useAdmin";
import UseMember from "../Hook/useMember";
import Admin from "./sidebar/Admin";
import Member from "./sidebar/Member";
import User from "./sidebar/User";
import UseRole from "../Hook/useRole";

const DashboardLayout = () => {
  const { user } = UseAuth();
  const [agreement] = UseAgreement();
  const [role] = UseRole();

  //TODO : pending
  const { isAdmin, isMember, isLoading } = UseAdmin();
  if (isLoading) {
    return <div className="flex justify-center text-red-700">Loading...</div>;
  }
  return (
    <div className="lg:flex">
      {/* Dashboard Sidebar */}
      <div className="">
        <aside className="lg:flex flex-col lg:w-64  min-h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <div>
            <BiBuildingHouse size={38} className="text-green-600" />
            <p className="font-abel text-2xl text-white">Dream Rent</p>
          </div>

          <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/* <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg> */}
            </span>

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
              {!role && <User />}
              {/* <User /> */}
              <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200">
                <ImProfile size={20} />
                <NavLink to="/" className="mx-4 font-medium ">
                  Home
                </NavLink>
              </a>
            </nav>

            <a className="flex items-center px-4 -mx-2">
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
      <div className="w-full p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
