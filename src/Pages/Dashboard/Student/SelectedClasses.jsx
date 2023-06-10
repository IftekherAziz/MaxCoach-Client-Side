import { Helmet } from "react-helmet";
import useEnroll from "../../../Hooks/useEnroll";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const [cart, refetch] = useEnroll();

  const handleDelete = (singleClass) => {
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
        fetch(`http://localhost:5000/carts/${singleClass._id}`, {
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
    <div>
      <Helmet>
        <title>MaxCoach | Selected Classes </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Your have selected {cart.length} class
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
              <th>Available Seats</th>
              <th>Price</th>
              <th>Pay Now</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td>
                  <img className="h-12 w-12 rounded" src={singleClass.image} />
                </td>
                <td className="font-semibold">{singleClass.className}</td>
                <td>{singleClass.instructorEmail}</td>
                <td className="text-center">{singleClass.availableSeats}</td>
                <td>${singleClass.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${singleClass._id}`}>
                    <button className="btn btn-sm bg-black text-white capitalize">
                      Enroll
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(singleClass)}
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
