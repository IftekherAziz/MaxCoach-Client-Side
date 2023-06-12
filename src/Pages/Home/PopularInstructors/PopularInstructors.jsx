import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://max-coach.vercel.app/instructors")
      .then((response) => response.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const limitedInstructors = instructors.slice(0, 6);

  return (
    <section className="mb-12 mx-10 md:mx-0">
      <div>
        <h2 className="text-4xl font-bold text-center mt-20 mb-5">
          Popular Instructors
        </h2>
        <hr className="w-1/6 mx-auto bg-teal-800 0 h-1" />
      </div>
      <div className="mt-20">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {limitedInstructors.map((instructor) => (
            <SwiperSlide key={instructor._id}>
              <div className="card w-full mb-10">
                <figure className="border border-t-slate-200 border-b-0">
                  <img
                    src={instructor.photoURL}
                    alt="Instructor"
                    className="w-full h-[250px]"
                  />
                </figure>
                <div className="card-body bg-zinc-50 rounded-lg rounded-t-none">
                  <h2 className="card-title">{instructor.name}</h2>
                  <p className="text-sm text-justify">
                    Email: {instructor.email}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularInstructors;
