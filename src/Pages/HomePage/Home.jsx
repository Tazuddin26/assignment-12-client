import AboutUs from "./AboutUs";
import Amenities from "./Amenities";
import AnimateGallery from "./AnimateGallery";
import ApartmentSlider from "./ApartmentSlider";
import Banner from "./Banner";
import FaqSection from "./FaqSection";
import FeatureApartment from "./FeatureApatrment";
import LocationApartment from "./LocationApartment";


const Home = () => {
  return (
    <div className="mt-20">
      <Banner />
      <ApartmentSlider />
      <div className="">
      <FeatureApartment />
      <AboutUs />
      <Amenities/>
      <AnimateGallery/>
      <FaqSection/>
      <LocationApartment/>
      </div>
    </div>
  );
};

export default Home;
