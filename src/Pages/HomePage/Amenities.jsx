import { BiSolidBuildingHouse } from "react-icons/bi";
import {
  FaSwimmer,
  FaDumbbell,
  FaCar,
  FaShieldAlt,
  FaTree,
  FaUsers,
} from "react-icons/fa";

const amenities = [
  {
    icon: <FaShieldAlt size={40} />,
    title: "24/7 Security",
    desc: "Advanced surveillance & professional guards.",
  },
  {
    icon: <FaDumbbell size={40} />,
    title: "Fitness Center",
    desc: "State-of-the-art gym with modern equipment.",
  },
  {
    icon: <FaSwimmer size={40} />,
    title: "Swimming Pool",
    desc: "Spacious & clean pool for all residents.",
  },
  {
    icon: <FaCar size={40} />,
    title: "Parking Facility",
    desc: "Secure and spacious parking for all vehicles.",
  },
  {
    icon: <FaTree size={40} />,
    title: "Green Space",
    desc: "Beautiful gardens and walking paths.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Community Hall",
    desc: "Perfect for gatherings and events.",
  },
];

const Amenities = () => {
  return (
    <section className="my-10 " id="amenities">
      <div className="container mx-auto text-center">
        <div className="divider divider-info lg:mx-36 mx-4  ">
          <h2 className="text-4xl font-bold font-abel mb-2">Amenities</h2>
        </div>

        <p className="text-gray-600 mb-6 font-tauri">
          Experience world-class facilities designed for your comfort.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-blue-600 mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-abel dark:text-gray-800">
                {amenity.title}
              </h3>
              <p className="text-gray-600">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
