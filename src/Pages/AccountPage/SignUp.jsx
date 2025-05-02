import { BiBuildingHouse } from "react-icons/bi";
import { FiUpload, FiUser } from "react-icons/fi";
import { data, Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { PiAddressBookThin } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
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
  const onSubmit = async (data) => {
    console.log("signup data", data);
    // const imageFile = { image: data.image[0] };
    const formData = new FormData();
    formData.append("image", data.image[0]);
    try {
      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        const imageUrl = res.data.data.display_url;

        console.log(res.data.success);

        const createUser = await createSignUpUser(data.email, data.password);
        const registerUser = createUser.user;
        console.log("signup user", registerUser);
        await updateUserProfile(data.username, imageUrl);

        const userInformation = {
          name: data.username,
          email: registerUser.email,
          image: imageUrl,
          phone: data.phone,
          address: data.address,
        };
        const postRes = await axiosPublic.post("/users", userInformation);
        if (postRes.data.insertedId) {
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
      }
    } catch (error) {
      console.error("Error during to signup:", error);
    }
  };
  return (
    <div className="flex w-full my-10 mt-24  max-w-sm mx-auto overflow-hidden bg-white/10 rounded-lg shadow-md lg:max-w-4xl shadow-green-800">
      <div className="hidden bg-cover lg:block rounded-t-full lg:w-1/2 bg-[url('https://i.ibb.co.com/jTwdcv4/building.jpg')] "></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <p className="mt-3 text-2xl text-center font-tauri ">Welcome To!</p>
          <div className="flex justify-center mx-auto">
            <div className="flex items-center">
              <BiBuildingHouse size={38} className="text-green-800" />
              <p className="font-abel text-2xl ">Dream Rent</p>
            </div>
          </div>
          <div className="relative items-center mt-8 flex">
            <span className="absolute">
              <FiUser size={24} className="mx-3 text-gray-700 " />
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
            className="flex items-center px-3 py-3 mx-auto mt-4 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer "
          >
            <FiUpload size={24} className=" text-gray-700" />

            <h2 className="mx-3 text-gray-400">Profile Photo</h2>
            <input
              {...register("image", { required: true })}
              id="dropzone-file"
              type="file"
              name="image"
              required
              className="hidden"
            />
            {errors.image && (
              <span className="text-red-500 ">This field is required</span>
            )}
          </label>
          <div className="mt-4">
            <div className="  items-center flex">
              <span className="absolute">
                <CiPhone size={24} className="mx-3 text-gray-700 " />
              </span>
              <input
                {...register("phone", { required: true })}
                type="phone number"
                name="phone"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-700  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="phone number"
                required
              />
              {errors.phone && (
                <span className="text-red-500 ">This field is required</span>
              )}
            </div>
          </div>
          <div className="mt-4">
            <div className="  items-center flex">
              <span className="absolute">
                <PiAddressBookThin size={24} className="mx-3 text-gray-700 " />
              </span>
              <input
                {...register("address", { required: true })}
                type="address"
                name="address"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-700  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Address"
                required
              />
              {errors.address && (
                <span className="text-red-500 ">This field is required</span>
              )}
            </div>
          </div>
          <div className="mt-4">
            <div className="  items-center flex">
              <span className="absolute">
                <MdOutlineMail size={24} className="mx-3 text-gray-700 " />
              </span>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-700  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email Address"
                required
              />
              {errors.email && (
                <span className="text-red-500 ">This field is required</span>
              )}
            </div>
          </div>

          <div className="mt-4">
            <div className="items-center">
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
              className="w-full px-6 py-3 btn btn-success"
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
