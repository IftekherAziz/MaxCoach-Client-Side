import { Helmet } from "react-helmet";

const PaymentHistory = () => {
  return (
    <div className="max-w-xs mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | Payment History </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Payment History
        </h2>
      </div>
    </div>
  );
};

export default PaymentHistory;
