import { Helmet } from "react-helmet";

const EnrolledClasses = () => {
  return (
    <div>
      <Helmet>
        <title>MaxCoach | Enrolled Classes </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Enrolled Classes
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
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
