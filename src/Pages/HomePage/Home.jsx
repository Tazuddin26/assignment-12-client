import AboutUs from "./AboutUs";
import Amenities from "./Amenities";
import AnimateGallery from "./AnimateGallery";
import ApartmentSlider from "./ApartmentSlider";
import Banner from "./Banner";
import Facilities from "./Facilities";
import FaqSection from "./FaqSection";
import FeatureApartment from "./FeatureApatrment";
import Location from "./Location";

const Home = () => {
  return (
    <div className="mt-20">
      <Banner />
      <ApartmentSlider />
      <div className="bg-gray-50">
      <FeatureApartment />
      <AboutUs />
      <Amenities/>
      <AnimateGallery/>
      <FaqSection/>
      <Location/>
      </div>
    </div>
  );
};

export default Home;
