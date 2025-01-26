import { IoPlayBackSharp } from "react-icons/io5";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center my-10">   
      <div className="border rounded-2xl w-8/12 shadow-md">
        <div className="">
        <p className="text-6xl font-abel font-bold text-center text-yellow-400">
            <i>{error.statusText || error.message}</i>
          </p>
          <div className="relative w-full mt-8  lg:mt-0">
            <img
              className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
              src="https://i.ibb.co.com/LhPR3cK/detective-animation-404-error-page.gif"
              alt=""
            />
          </div>
         
          {/* <p className="mt-4 text-gray-500 text-6xl font-abel dark:text-gray-400">
            Sorry, we could not find this page.Here are some helpful
          </p> */}
          <Link onClick={handleGoBack} className="ml-10 flex items-center text-2xl font-abel hover:underline hover:text-blue-600">
          <IoPlayBackSharp size={28} className="text-green-500 hover:text-pink-600"/>
             Home
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
