import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Instructors = () => {
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

  return (
    <section className="mb-10 mx-10 md:mx-0">
      <Helmet>
        <title>MaxCoach | Instructors</title>
      </Helmet>
      <div>
        <h2 className="text-4xl font-bold text-center mt-12 mb-5">
          All Instructors
        </h2>
        <hr className="w-1/6 mx-auto bg-teal-800 h-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
        {instructors.map((instructor) => (
          <>
            <motion.div
              key={instructor._id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1}}
            >
              <div className="card w-full  mb-6">
                <figure className="border border-t-slate-200 border-b-0">
                  <img
                    src={instructor.photoURL}
                    alt="Instructor"
                    className="w-full h-[230px]"
                  />
                </figure>
                <div className="card-body bg-zinc-50 rounded-lg rounded-t-none">
                  <h2 className="card-title">{instructor.name}</h2>
                  <p className="text-sm text-justify">
                    Email: {instructor.email}
                  </p>
                  <button className="btn capitalize btn-neutral mt-5">
                    View Classes
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
