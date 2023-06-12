import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const EnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: myEnrolledClasses = [] } = useQuery(
    ["payment", user?.email],
    async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    }
  );
  return (
    <div className="max-w-xs mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | Enrolled Classes </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Enrolled Class: {myEnrolledClasses.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table border w-full ">
          {/* head */}
          <thead className=" text-black bg-zinc-50">
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Email</th>
              <th>Paid</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myEnrolledClasses.map((enrolledClass, index) => (
              <tr key={enrolledClass._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="h-12 w-12 rounded"
                    src={enrolledClass.image}
                  />
                </td>
                <td>{enrolledClass.className}</td>
                <td>{enrolledClass.instructorEmail}</td>
                <td className="font-semibold text-xs">${enrolledClass.price}</td>
                {/* TODO:*/}
                <td >
                  {" "}
                  <button
                    className="btn btn-sm bg-black text-white capitalize"
                  >
                    Go to Class
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
