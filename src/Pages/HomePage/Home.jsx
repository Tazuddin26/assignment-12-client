import AboutUs from "./AboutUs";
import ApartmentSlider from "./ApartmentSlider";
import Banner from "./Banner";
import FeatureApartment from "./FeatureApatrment";

const Home = () => {
  return (
    <div className="mt-24">
      <Banner />
      <ApartmentSlider />
      <FeatureApartment />
      <AboutUs />
    </div>
  );
};

export default Home;
