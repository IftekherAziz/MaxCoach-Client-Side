import { Helmet } from "react-helmet";
import useEnroll from "../../../Hooks/useEnroll";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const [cart, refetch] = useEnroll();

  const handleDelete = (selectedClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://max-coach.vercel.app/carts/${selectedClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been removed.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-xs mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | Selected Classes </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Selected Class: {cart.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table border w-full ">
          {/* head */}
          <thead className=" text-black bg-zinc-50">
            <tr>
              <th>No</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Pay Now</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((selectedClass, index) => (
              <tr key={selectedClass._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="h-12 w-12 rounded"
                    src={selectedClass.image}
                  />
                </td>
                <td className="font-semibold">{selectedClass.className}</td>
                <td>{selectedClass.instructorEmail}</td>
                <td>${selectedClass.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${selectedClass._id}`}>
                    <button className="btn btn-sm bg-black text-white capitalize">
                      Enroll
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(selectedClass)}
                    className="btn btn-sm bg-red-600  text-white capitalize"
                  >
                    Delete
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

export default SelectedClasses;
