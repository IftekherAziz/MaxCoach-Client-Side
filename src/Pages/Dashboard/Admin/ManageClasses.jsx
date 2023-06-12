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
    fetch(`https://max-coach.vercel.app/classes/approve/${myClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: `${myClass?.className} is updated!`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  // Handle Deny
  const handleDeny = (myClass) => {
    fetch(`https://max-coach.vercel.app/classes/deny/${myClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${myClass?.className} is updated!`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  // Handle Feedback:
  const handleFeedback = (myClass) => {
    Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const feedbackText = result.value;

        fetch(`https://max-coach.vercel.app/classes/feedback/${myClass._id}`, {
          method: "PATCH",
          body: JSON.stringify({ feedback: feedbackText }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${myClass?.className} is updated!`,
                showConfirmButton: false,
                timer: 1000,
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
          <table className="table border mb-10">
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
                    <button
                      onClick={() => handleFeedback(myClass)}
                      className="btn btn-sm capitalize btn-neutral text-white flex"
                    >
                      Feedback
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

export default ManageClasses;
