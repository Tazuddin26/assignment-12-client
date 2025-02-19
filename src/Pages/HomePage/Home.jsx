import AboutUs from "./AboutUs";
import ApartmentSlider from "./ApartmentSlider";
import Banner from "./Banner";
import FeatureApartment from "./FeatureApatrment";

const Home = () => {
  return (
    <div className="mt-24">
      <Banner />
      <ApartmentSlider />
      <div className="bg-gray-100">
      <FeatureApartment />
      <AboutUs />
      </div>
    </div>
  );
};

export default Home;
