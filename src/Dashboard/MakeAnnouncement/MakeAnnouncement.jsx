import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GrDocumentUpdate } from "react-icons/gr";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MakeAnnouncement = () => {
  const axiosSecure = UseAxiosSecure();
  const [announceDate, setAnnounceDate] = useState(new Date());
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const announcementDate = announceDate.toISOString().split("T")[0];
    const formData = { ...data, announcementDate };
    console.log("Announcement data", data);
    <DatePicker
      selected={announceDate}
      onChange={(date) => setAnnounceDate(date)}
      dateFormat="yyyy-MM-dd"
    />;
    axiosSecure
      .post("/announcements", formData)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Create Announcement Successfully .",
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <section className="max-w-4xl p-6 mt-5 mx-auto bg-white rounded-md shadow-lg shadow-green-950 dark:bg-gray-800">
        <h2 className="text-2xl font-tauri  text-gray-700 capitalize dark:text-green-500">
          Announcement For Apartments
        </h2>
        <hr className="border-green-600 mt-4" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 font-abel text-xl gap-6 mt-8 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="username"
              >
                Announcement Title
              </label>
              <input
                {...register("title", { required: true })}
                name="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Flat Number
              </label>
              <input
                {...register("flatNumber", { required: true })}
                name="flatNumber"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <label
              for="Description"
              className="block mt-6 text-xl font-abel text-gray-500 dark:text-gray-300"
            >
              Announcement Description
            </label>

            <textarea
              {...register("announcement", { required: true })}
              placeholder="Here Description"
              name="announcement"
              className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
            ></textarea>
          </div>
          <div className="flex justify-end mt-8 my-5">
            <button
              type="submit"
              className="flex gap-2 px-8 py-2.5 shadow-md leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-gray-600"
            >
              <GrDocumentUpdate size={20} className="text-amber-500" />
              Submit Announce
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MakeAnnouncement;
