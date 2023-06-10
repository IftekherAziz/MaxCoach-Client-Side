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
    <div className=" max-w-sm mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | My Classes </title>
      </Helmet>
      <h3 className="border mb-5 text-xl bg-zinc-50 rounded font-semibold h-[80px] text-center flex items-center justify-center">
        My Classes
      </h3>
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
                  <td>{myClass.status}</td>
                  <td>{myClass.price.toFixed(2)}</td>
                  <td>{myClass.feedback}</td>
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
