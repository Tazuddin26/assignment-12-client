import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimateGallery() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "Luxury Rooms",
      description: "Spacious & modern design.",
      image: "https://i.ibb.co.com/Xr9n2Zgx/luxury.jpg",
    },
    {
      id: 2,
      title: "Swimming Pool",
      description: "Olympic-size with lounge.",
      image: "https://i.ibb.co.com/bRQMz96Q/swimming.jpg",
    },
    {
      id: 3,
      title: "Fitness Center",
      description: "Fully equipped gym.",
      image: "https://i.ibb.co.com/8gFQNznC/gym.jpg",
    },
  ];

  return (
    <div className=" lg:mt-14">
      <div className="divider divider-warning lg:mx-36 mx-4  ">
        <h1 className="text-4xl font-abel text-center ">Amenities Gallery</h1>
      </div>
      <div className="relative flex flex-col justify-end h-[400px] lg:p p-4 mt-8">
        <motion.div
          className="absolute top-0  left-0 w-full h-96 flex items-center justify-center font-tauri text-amber-500 text-3xl font-bold"
          animate={{ x: activeFeature !== null ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            backgroundImage:
              activeFeature !== null
                ? `url('${features[activeFeature]?.image}')`
                : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {activeFeature !== null
            ? features[activeFeature].title
            : "Apartment Features"}
        </motion.div>

        {/* Feature List */}
        <div className="z-10 lg:w-8/12 w-full lg:ml-56 justify-center grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-6 gap-2 ">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="lg:p-8 p-2 bg-white font-abel text-center shadow-lg rounded-lg cursor-pointer hover:bg-blue-200 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(0)}
            >
              <h3 className="lg:text-xl font-semibold items-center text-black">
                {feature.title}
              </h3>
              <p className="text-sm hidden lg:block">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
