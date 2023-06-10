import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
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
      <div className="flex flex-wrap justify-between items-center mt-20">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card w-96  mb-10">
            <figure className="border border-t-slate-200 border-b-0">
              <img
                src={instructor.photoURL}
                alt="Instructor"
                className="w-full max-h-[280px]"
              />
            </figure>
            <div className="card-body bg-zinc-50 rounded-lg rounded-t-none">
              <h2 className="card-title">{instructor.name}</h2>
              <p className="text-sm text-justify">Email: {instructor.email}</p>
              <button className="btn btn-neutral mt-5">View All Classes</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
