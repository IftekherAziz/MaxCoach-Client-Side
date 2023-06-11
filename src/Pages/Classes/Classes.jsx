import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import useUser from "../../Hooks/useUser";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useEnroll from "../../Hooks/useEnroll";

const Classes = () => {
  const [allClasses, setAllClasses] = useState([]);

  const { user } = useAuth();

  const [userFromDB] = useUser();
  const role = userFromDB?.role;
  // console.log(role);

  const navigate = useNavigate();
  const location = useLocation();

  const [, refetch] = useEnroll();

  useEffect(() => {
    fetch("http://localhost:5000/viewClasses")
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
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
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
          <div
            key={classes._id}
            className="card w-full bg-base-100 shadow-md mb-10"
          >
            <figure className="">
              <img
                src={classes.image}
                alt="Class Image"
                className="w-full h-[200px] cover"
              />
            </figure>
            <div className="card-body  ">
              <h2 className="text-md font-medium mb-2">{classes.className}</h2>

              <div className="flex items-center justify-center lg:justify-start">
                <p className="text-sm">
                  Instructor :{" "}
                  <span className="text-orange-500 font-medium">
                    {classes.instructorName}
                  </span>
                </p>
                <p className="text-sm">
                  Enrolled:{" "}
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
              <button
                onClick={() => handleEnrollNow(classes)}
                className="btn btn-neutral"
                disabled={role === "admin" || role === "instructor"}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
