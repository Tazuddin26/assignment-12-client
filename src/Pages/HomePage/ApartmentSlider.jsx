import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BiSolidBuildingHouse } from "react-icons/bi";

const ApartmentSlider = () => {
  return (
    <div className="">
      <div className="my-10 ">
        <h1 className="text-3xl font-tauri text-center">
          Standard Value,Silent Environment <br /> & Most Tide Security!
        </h1>
        <div className="divider divider-success lg:mx-36 mx-4 my-10 ">
          <BiSolidBuildingHouse size={68} className="text-gray-900 w-28 " />
        </div>
      </div>
      <div className="">
        <Swiper
          slidesPerView={2}
          freeMode={true}
          loop={true}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper rounded-xl lg:w-[80%]  "
        >
          <SwiperSlide className=" text-white rounded-md bg-indigo-900">
            <img
              src="https://i.ibb.co.com/k0ZGmmR/img1.jpg"
              alt="swiper img1 "
              className="rounded-t-md h-[250px]"
            />
            <p className="text-center text-xs md:text-base rounded-b-md font-thin py-2 ">
              Pleasant Environment
            </p>
          </SwiperSlide>
          <SwiperSlide className=" text-white rounded-md bg-sky-800">
            <img
              src="https://i.ibb.co.com/8zMxgRR/img2.jpg"
              alt="swiper img1 "
              className="rounded-t-md h-[250px] "
            />
            <p className="text-center text-xs md:text-base rounded-b-md   font-thin py-2 ">
              Natural Environment
            </p>
          </SwiperSlide>
          <SwiperSlide className=" text-white rounded-md bg-green-800">
            <img
              src="https://i.ibb.co.com/5BH883r/img3.jpg"
              alt="swiper img2 "
              className="rounded-t-md h-[250px]"
            />
            <p className="text-center text-xs md:text-base rounded-b-md font-thin py-2 ">
              Talk to Environment
            </p>
          </SwiperSlide>
          <SwiperSlide className=" text-white rounded-md bg-blue-800">
            <img
              src="https://i.ibb.co.com/51Br0zV/img4.jpg"
              alt="swiper img3 "
              className="rounded-t-md h-[250px]"
            />
            <p className="text-center text-xs md:text-base rounded-b-md font-thin py-2 ">
              Has a Mosque at the Top
            </p>
          </SwiperSlide>
          <SwiperSlide className=" text-white rounded-md bg-gray-800">
            <img
              src="https://i.ibb.co.com/Vm0C6hB/santa.jpg"
              alt="swiper img4 "
              className="rounded-t-md h-[250px]"
            />
            <p className="text-center text-xs md:text-base rounded-b-md font-thin py-2 ">
              There is No Loud Sound
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ApartmentSlider;
