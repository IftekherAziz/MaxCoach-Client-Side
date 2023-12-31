import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import useUser from "../../Hooks/useUser";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useEnroll from "../../Hooks/useEnroll";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { motion } from "framer-motion";
const Classes = () => {
  const [allClasses, setAllClasses] = useState([]);

  const { user } = useAuth();
  const [userFromDB] = useUser();
  const role = userFromDB?.role;

  const navigate = useNavigate();
  const location = useLocation();

  const [, refetch] = useEnroll();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    fetch("https://max-coach.vercel.app/viewClasses")
      .then((response) => response.json())
      .then((data) => {
        setAllClasses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Hanlde Enroll Now:
  const handleEnrollNow = (classItem) => {
    const { _id, className, image, price, instructorEmail, availableSeats } =
      classItem;
    if (user && user.email) {
      const selectedClass = {
        selectedClassId: _id,
        className,
        image,
        price,
        instructorEmail,
        availableSeats,
        email: user.email,
      };
      axiosSecure
        .post("/carts", selectedClass)
        .then((response) => response.data)
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added to your list successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
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
        <hr className="w-1/6 mx-auto bg-teal-800 h-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        {allClasses.map((classes) => (
          <>
            <motion.div
              key={classes._id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div
                key={classes._id}
                className={`card w-full bg-base-100 shadow-md mb-10 ${
                  classes.availableSeats == classes.enrolled_students
                    ? "bg-red-600 text-white"
                    : ""
                }`}
              >
                <figure className="">
                  <img
                    src={classes.image}
                    alt="Class Image"
                    className="w-full h-[200px] object-cover"
                  />
                </figure>
                <div className="card-body  ">
                  <h2 className="text-md font-medium mb-2">
                    {classes.className}
                  </h2>

                  <div className="flex items-center justify-center lg:justify-start">
                    <p className="text-sm">
                      Instructor :{" "}
                      <span className=" font-medium">
                        {classes.instructorName}
                      </span>
                    </p>
                    <p className="text-sm">
                      Enrolled:{" "}
                      <span className="font-medium">
                        {classes.enrolled_students}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                    <p className="text-sm">
                      Total Seats :{" "}
                      <span className="font-medium">
                        {classes.availableSeats}
                      </span>
                    </p>
                    <p className="text-sm">
                      Price:{" "}
                      <span className="font-medium">${classes.price}</span>
                    </p>
                  </div>
                  <span className="divider"></span>
                  <button
                    onClick={() => handleEnrollNow(classes)}
                    className="btn btn-neutral"
                    disabled={
                      role === "admin" ||
                      role === "instructor" ||
                      classes.availableSeats == classes.enrolled_students
                    }
                  >
                    Enroll Now
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

export default Classes;
