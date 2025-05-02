import AboutUs from "./AboutUs";
import Amenities from "./Amenities";
import AnimateGallery from "./AnimateGallery";
import ApartmentSlider from "./ApartmentSlider";
import Banner from "./Banner";
import FaqSection from "./FaqSection";
import FeatureApartment from "./FeatureApatrment";
import LocationApartment from "./LocationApartment";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="mt-20">
      <Banner />
      <ApartmentSlider />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeatureApartment />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AboutUs />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Amenities />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimateGallery />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <FaqSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <LocationApartment />
      </motion.div>
    </div>
  );
};
export default Home;
