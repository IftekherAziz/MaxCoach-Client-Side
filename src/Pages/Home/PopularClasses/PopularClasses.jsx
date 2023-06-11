import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: popularClasses = [] } = useQuery(["popular"], async () => {
    const res = await axiosSecure.get("/classes/popular");
    return res.data;
  });
  return (
    <section className=" mx-10 md:mx-0">
      <div>
        <h2 className="text-4xl font-bold text-center mt-20 mb-5">
          Popular Classes
        </h2>
        <hr className="w-1/6 mx-auto bg-teal-800 h-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {popularClasses.map((popularClass) => (
          <div key={popularClass._id}>
            <div className="card w-full bg-base-100 shadow-md mb-10">
              <figure className="">
                <img
                  src={popularClass.image}
                  alt="Course Image"
                  className="w-full h-[250px]"
                />
              </figure>
              <div className="card-body ">
                <h2 className="text-lg font-semibold">
                  {popularClass.className}
                </h2>
                <div className="flex">
                  <p className="text-sm">
                    Enrolled Students:
                    <span className="text-teal-800  font-medium">
                      {" "}
                      {popularClass.enrolled_students}
                    </span>
                  </p>
                  <p className="text-sm">
                    Available Seats:
                    <span className="text-teal-800  font-medium">
                      {" "}
                      {popularClass.availableSeats -
                        popularClass.enrolled_students}
                    </span>
                  </p>
                </div>
                <span className="divider"></span>
                <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                  <p className="font-semibold text-md">
                    Price:{" "}
                    <span className="text-teal-800  font-medium">
                      {" "}
                      ${popularClass.price}
                    </span>
                  </p>
                  <button className="btn btn-neutral capitalize">
                    Enroll now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
