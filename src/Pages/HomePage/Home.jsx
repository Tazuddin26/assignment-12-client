import ApartmentSlider from "./ApartmentSlider";
import Banner from "./Banner";
import FeatureApartment from "./FeatureApatrment";

const Home = () => {
  return (
    <div className="mt-24">
      <Banner />
      <ApartmentSlider />
    <FeatureApartment/>
      <h1 className="font-abel text-3xl">I am Home Page</h1>
    </div>
  );
};

export default Home;
