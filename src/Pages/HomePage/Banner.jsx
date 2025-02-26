import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import TypeWriterEffect from "react-typewriter-effect";

const Banner = () => {
  return (
    <motion.div
      className="hero justify-start min-h-[700px]"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/Vm0C6hB/santa.jpg)",
      }}
    >
      <div className="hero-content text-right text-neutral">
        <div className="md:py-10 pl-6">
          <div className="max-w-md ">
            <h2 className=" mb-5 text-4xl leading-normal font-tauri dark:text-white font-bold">
              <TypeWriterEffect
                startDelay={1000}
                cursorColor="#3F3D56"
                multiText={[
                  "Setting Standards ",
                  "Discover Your Dream Rental with ",
                  "Your Partner in Building a Lifetime of Memories.",
                  "Stay Happy. Stay Inspired. Stay Home.",
                  "Easy way to find a Beautiful Residential",
                ]}
                multiTextDelay={1000}
                typeSpeed={30}
              />
            </h2>
            <h2 className=" mb-5 text-4xl leading-normal  font-bold">
              <hr className="border-0 pt-3" />
            </h2>
            <div className="mb-5">
              <p className="text-white text-xl text-start py-6 backgrond-line  lg:bg-transparent ">
                Where every brick tells a unique and captivating story. We
                believe that a home is not just a structure; its a narrative
                waiting to unfold.
              </p>
              <span className="text-3xl font-abel text-rose-800">
                ... Dream Rent
              </span>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4  glass bg-[#ffffffbe] gap-6 p-4 rounded-xl items-center justify-around text-gray-700">
            <div className="">
              <h3 className="font-semibold">Location</h3>
             
            </div>
            <div>
              <h3 className="font-semibold">Property Type</h3>

            </div>
            

          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
