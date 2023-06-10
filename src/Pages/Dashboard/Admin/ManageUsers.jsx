/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
// import useAxios from "../../../Hooks/useAxios";
import { FaUserSecret, FaUserGraduate } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  // Make admin:
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
    <div className=" max-w-sm mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | Manage Users </title>
      </Helmet>
      <h3 className="border mb-5 text-xl bg-zinc-50 rounded font-semibold h-[80px] text-center flex items-center justify-center">
        Total Users: {users.length}
      </h3>
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
