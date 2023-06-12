import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";


const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: paymentHistory = [] } = useQuery(
    ["payment", user?.email],
    async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    }
  );
  return (
    <div className="max-w-xs mx-auto h-full md:max-w-full">
      <Helmet>
        <title>MaxCoach | Payment History </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Payment History
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
              <th>Paid</th>
              <th>Transaction ID</th>
              <th>Transaction Date</th>
              <th>Transaction Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((enrolledClass, index) => (
              <tr key={enrolledClass._id}>
                <th>{index + 1}</th>

                <td>
                  <img
                    className="h-12 w-12 rounded"
                    src={enrolledClass.image}
                  />
                </td>

                <td>{enrolledClass.className}</td>
                <td>${enrolledClass.price}</td>
                <td className="font-semibold text-xs">{enrolledClass.transactionId}</td>
                <td>{moment(enrolledClass.date).format("YYYY-MM-DD HH:mm")}</td>

                <td>{enrolledClass.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
