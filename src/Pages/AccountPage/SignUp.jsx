import { BiBuildingHouse } from "react-icons/bi";
import { FiUpload, FiUser } from "react-icons/fi";
import { data, Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createSignUpUser, updateUserProfile } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("signup data", data);
    createSignUpUser(data.email, data.password).then((res) => {
      const registerUser = res.user;
      console.log("signup user", registerUser);
      updateUserProfile(data.username, data.image)
        .then(() => {
          const userInformation = {
            name: data.username,
            email: registerUser.email,
          };
          axiosPublic.post("/users", userInformation).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    });
  };
  return (
    <div className="flex w-full my-10 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl shadow-gray-700">
      <div className="hidden bg-cover lg:block rounded-t-full lg:w-1/2 bg-[url('https://i.ibb.co.com/8zMxgRR/img2.jpg')] "></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <p className="mt-3 text-2xl text-center font-tauri">Welcome To!</p>
          <div className="flex justify-center mx-auto">
            <div className="flex items-center">
              <BiBuildingHouse size={38} className="text-green-800" />
              <p className="font-abel text-2xl ">Dream Rent</p>
            </div>
          </div>
          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <FiUser size={24} className="mx-3 text-gray-300 " />
            </span>
            <input
              {...register("username", { required: true })}
              name="username"
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              required
            />
            {errors.username && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <label
            htmlFor="dropzone-file"
            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer "
          >
            <FiUpload size={24} className=" text-gray-300" />

            <h2 className="mx-3 text-gray-400">Profile Photo</h2>
            <input
              {...register("image", { required: true })}
              id="dropzone-file"
              type="text"
              name="image"
              required
              className=""
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>
          <div className="mt-4">
            <div className="flex items-center ">
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email Address"
                required
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type="Password"
                name="password"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                required
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500">
                  Password must be at most 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  Password must contain at least one uppercase letter, one
                  lowercase letter, one number and one special character
                </span>
              )}
            </div>
          </div>

          <div className="mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="w-full px-6 py-3 btn btn-outline"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-green-500 uppercase hover:underline"
            >
              Already have an account?
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
