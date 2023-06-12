import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { FaEdit } from "react-icons/fa";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: instructorClasses = [] } = useQuery(
    ["classes", user?.email],
    async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    }
  );

  const handleUpdate = () => {};

  return (
    <div className=" max-w-xs mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | My Classes </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          My Classes
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table border mb-10">
            <thead className="bg-zinc-50">
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Price</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {instructorClasses.map((myClass, index) => (
                <tr key={myClass._id}>
                  <th>{index + 1}</th>
                  <th>
                    <img
                      className="h-12 w-12 rounded"
                      src={myClass.image}
                      alt="Course Name"
                    />
                  </th>
                  <td>{myClass.className}</td>
                  <td className="text-center">{myClass.enrolled_students}</td>
                  <td className="capitalize">{myClass.status}</td>
                  <td>{myClass.price}</td>
                  <td>{myClass.feedback}</td>
                {/* TO DO: UPDATE MY CLASS */}
                  <td>
                    <button
                      onClick={() => handleUpdate(user)}
                      className="btn btn-sm bg-teal-800  text-white flex"
                    >
                      <FaEdit></FaEdit>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
