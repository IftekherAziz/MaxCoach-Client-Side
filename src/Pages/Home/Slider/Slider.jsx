/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="max-h-[650px] w-full"
              src="https://i.ibb.co/TLC1Nxh/pexels-brett-sayles-3697354.jpg"
              alt=""
            />
            <div className="text-overlay">
              <h2 className="text-5xl md:text-7xl mb-5 font-bold">
                Michael Rodriguez
              </h2>
              <p className="my-3 max-w-sm md:max-w-4xl mx-auto text-center">
                Michael Rodriguez is a renowned portrait photographer with a
                passion for capturing the essence and emotions of his subjects.
                Join Michael's classes to master the art of capturing
                captivating and expressive portraits.
              </p>
              <button>Get Started</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[650px] w-full"
              src="https://cdn.pixabay.com/photo/2016/05/01/19/47/photographer-1365674_640.jpg"
              alt=""
            />
            <div className="text-overlay">
              <h2 className="text-5xl md:text-7xl mb-5 font-bold">
                Emily Johnson
              </h2>
              <p className="my-3 max-w-sm md:max-w-4xl mx-auto text-center">
                Her classes provide valuable insights into composition,
                lighting, and post-processing techniques. Whether you're a
                beginner or an experienced photographer, Emily's classes will
                inspire you to explore the world.
              </p>
              <button>Get Started</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[650px] w-full "
              src="https://cdn.pixabay.com/photo/2020/09/19/12/50/woman-5584377_640.jpg"
              alt=""
            />
            <div className="text-overlay ">
              <h2 className="text-5xl md:text-7xl mb-5 font-bold">
                Sarah Thompson
              </h2>
              <p className="my-3 max-w-sm md:max-w-4xl mx-auto text-center">
                Sarah's classes offer valuable insights and practical tips to
                photographers interested in documenting the essence of city
                life. Join Sarah's classes to explore the art of street
                photography and take your skills to the next level.
              </p>
              <button>Get Started</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
