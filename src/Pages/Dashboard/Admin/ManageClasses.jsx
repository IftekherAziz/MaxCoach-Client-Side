import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: allClasses = [], refetch } = useQuery(
    ["classes", user?.email],
    async () => {
      const res = await axiosSecure.get(`/classes`);
      return res.data;
    }
  );

  // Handle Approve
  const handleApprove = (myClass) => {
    axiosSecure.patch(`/classes/approve/${myClass._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${myClass?.className} is approved!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // Handle Deny
  const handleDeny = (myClass) => {
    axiosSecure.patch(`/classes/deny/${myClass._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${myClass?.className} is denied!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // Handle Feedback:
  const handleFeedback = (myClass) => {
    Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your feedback here",
      },
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        axiosSecure.patch(`/classes/feedback/${myClass._id}`).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${myClass?.className} feedback sent!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <div className=" max-w-xs mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | Manage Classes </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Manage Classes
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table border  mb-10">
            <thead className="bg-zinc-50">
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Instructor Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((myClass, index) => (
                <tr key={myClass._id}>
                  <th>{index + 1}</th>
                  <th>
                    <img
                      className="h-10 w-16 rounded"
                      src={myClass.image}
                      alt="Course Name"
                    />
                  </th>
                  <td>{myClass.className}</td>
                  <td>{myClass.instructorName}</td>
                  <td>{myClass.instructorEmail}</td>
                  <td className="text-center">{myClass.availableSeats}</td>
                  <td>{myClass.price}</td>
                  <td className="capitalize">{myClass.status}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleApprove(myClass)}
                      disabled={
                        myClass.status === "approved" ||
                        myClass.status === "denied"
                      }
                      className="btn btn-sm capitalize bg-green-800  text-white flex"
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDeny(myClass)}
                      disabled={
                        myClass.status === "approved" ||
                        myClass.status === "denied"
                      }
                      className="btn btn-sm capitalize bg-red-800  text-white flex"
                    >
                      Deny
                    </button>
                  </td>
                  <td>
                    {myClass.status === "denied" && (
                      <button
                        onClick={() => handleFeedback(myClass)}
                        className="btn btn-sm capitalize btn-neutral text-white flex"
                      >
                        Feedback
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

export default ManageClasses;
