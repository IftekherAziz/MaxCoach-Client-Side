import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

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
      <Slide direction="down" duration={1500}>
        <h2 className="text-4xl font-bold text-center mt-20 mb-5">
          Popular Instructors
        </h2>
        <hr className="w-1/6 mx-auto bg-teal-800 0 h-1" />
      </Slide>

      <div className="mt-20">
        {" "}
        <Marquee direction="left" speed={60} gradient={false}>
          <div className="grid grid-cols-8 ">
            {limitedInstructors.map((instructor) => (
              <div key={instructor._id} className="card w-96 mr-6 ">
                <figure className="border border-t-slate-200 border-b-0">
                  <img
                    src={instructor.photoURL}
                    alt="Instructor"
                    className="w-full h-[280px]"
                  />
                </figure>
                <div className="card-body bg-stone-50 rounded-lg rounded-t-none">
                  <h2 className="card-title">{instructor.name}</h2>
                  <p className="text-sm text-justify">
                    Email: {instructor.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default PopularInstructors;
