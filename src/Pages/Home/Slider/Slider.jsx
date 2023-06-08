/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <div className="-mt-4">
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
              src="https://i.ibb.co/Tcxb1cZ/pexels-thiago-2410565.jpg"
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
              className="max-h-[650px] w-full "
              src="https://i.ibb.co/6mvD8ZS/pexels-nappy-1210494.jpg"
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
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
