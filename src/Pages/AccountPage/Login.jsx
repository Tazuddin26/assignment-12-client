import React, { useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hook/useAxiosPublic";

const Login = () => {
  // const [disabled, setDisabled] = useState(true);
  const { signInUser, googleSignIn } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = UseAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  // console.log("location login page", location.formState);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password).then((res) => {
      const user = res.user;
      console.log("login user", user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Login Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
      window.scrollTo(0, 0);
    });
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log("google login", res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Post Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
        window.scrollTo(0, 0);
      });
    });
  };
  const handleLoginUser = (role) => {
    let email = "";
    let password = "";

    if (role === "user") {
      email = "bbb@bbb.com";
      password = "123456@Aa";
    } else if (role === "admin") {
      email = "abc@gmail.com";
      password = "123456@Aa";
    }
    document.getElementById("LoggingEmailAddress").value = email;
    document.getElementById("loggingPassword").value = password;
    // handleLogin({
    //   preventDefault: () => {},
    //   target: {
    //     email: { value: email },
    //     password: { value: password },
    //   },
    // });
  };

  return (
    <div className="flex w-full my-10 mt-40 bg-gray-800 max-w-sm mx-auto overflow-hidden rounded-lg shadow-md lg:max-w-4xl shadow-green-800">
      <div className="hidden bg-cover lg:block rounded-t-full lg:w-1/2 bg-[url('https://i.ibb.co.com/dPZsD92/about.jpg')] "></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 ">
        <form onSubmit={handleLogin} action="">
          <p className="mt-3 text-2xl text-white text-center font-tauri">
            Welcome back!
          </p>
          <div className="flex justify-center mx-auto">
            <div className="flex items-center mt-2">
              <BiBuildingHouse size={38} className="text-green-800" />
              <p className="font-abel text-white text-2xl ">Dream Rent</p>
            </div>
          </div>
          <div className="">
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full btn-info font-bold font-abel text-lg text-center"
            >
              <FcGoogle size={28} />
              Sign in with Google
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-green-600 lg:w-1/4"></span>

            <a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or login with email
            </a>

            <span className="w-1/5 border-b dark:border-green-600 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              name="email"
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2  bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              required
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-800 "
                htmlFor="loggingPassword"
              >
                Password
              </label>
            </div>

            <input
              name="password"
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:text-gray-800  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              required
            />
          </div>

          <div className="mt-6">
            <button className="w-full text-xl font-abel btn hover:text-white btn-success">
              Sign In
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-green-600 md:w-1/4"></span>

            <Link
              to="/signup"
              className="text-sm text-gray-500 uppercase dark:text-gray-600 hover:underline "
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b dark:border-green-600 md:w-1/4"></span>
          </div>
        </form>
        <div className="flex gap-3 justify-center">
          <div className="mt-4">
            <button
              onClick={() => handleLoginUser("user")}
              className="px-4 text-xl font-abel btn hover:text-white btn-accent"
            >
              Default User
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={() => handleLoginUser("admin")}
              className="px-4 text-xl font-abel btn hover:text-white btn-primary"
            >
              Default Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
