import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";

const Classes = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewClasses");
      setAllClasses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="mb-12 mx-10 md:mx-0">
      <Helmet>
        <title>MaxCoach | Classes</title>
      </Helmet>
      <div>
        <h2 className="text-4xl font-bold text-center mt-20 mb-5">
          Browse All Classes
        </h2>
        <hr className="w-1/4 mx-auto bg-orange-400 h-1" />
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-20">
        {allClasses.map((classes) => (
          <div
            key={classes._id}
            className="card w-96 bg-base-100 shadow-md mb-10"
          >
            <figure className="">
              <img
                src={classes.image}
                alt="Class Image"
                className="w-full max-h-[280px]"
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title mb-3">{classes.className}</h2>

              <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                <p className="text-sm">
                  Instructor :{" "}
                  <span className="text-orange-500 font-medium">
                    {classes.instructorName}
                  </span>
                </p>
                <p className="text-sm">
                  Enrolled: {" "}
                  <span className="text-orange-500 font-medium">
                     {classes.enrolled_students}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                <p className="text-sm">
                  Available Seats :{" "}
                  <span className="text-orange-500 font-medium">
                    {classes.availableSeats}
                  </span>
                </p>
                <p className="text-sm">
                  Price:{" "}
                  <span className="text-orange-500 font-medium">
                    ${classes.price}
                  </span>
                </p>
              </div>
              <span className="divider"></span>
              <button className="btn btn-neutral">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
