/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { FaUserSecret, FaUserGraduate, FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  // Make admin:
  const handleMakeAdmin = (user) => {
    fetch(`https://max-coach.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // Make instructor:
  const handleMakeInstructor = (user) => {
    fetch(`https://max-coach.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // Delete user:
  const handleDelete = () => {};

  return (
    <div className=" max-w-xs mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | Manage Users </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Manage Users
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table border w-full mb-10">
            <thead className="bg-zinc-50">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="h-10 md:h-12 w-10 md:w-12 rounded"
                      src={user.photoURL}
                      alt="User Image"
                    />
                  </td>
                  <td className="capitalize">{user.name}</td>
                  <td>{user.email}</td>
                  <td className="capitalize">
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost bg-teal-800 text-white"
                      >
                        <FaUserSecret />
                      </button>
                    )}
                  </td>
                  <td className="capitalize">
                    {user.role === "instructor" ? (
                      "instructor"
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost bg-teal-800 text-white"
                      >
                        <FaUserGraduate />
                      </button>
                    )}
                  </td>
                  {/* TODO: Delete User  */}
                  <td className="capitalize">
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost bg-red-600 text-white"
                    >
                      <FaTrash />
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

export default ManageUsers;
