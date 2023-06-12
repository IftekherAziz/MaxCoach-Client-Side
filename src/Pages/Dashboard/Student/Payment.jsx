import { Helmet } from "react-helmet";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://max-coach.vercel.app/carts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedClass(data);
      });
  }, []);

  return (
    <div className="mx-6 md:mx-0 ">
      <Helmet>
        <title>MaxCoach | Payment </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5  bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Make Payment
        </h2>
      </div>
      {/* Use stripe checkout form using elements and stripePromise props */}
      <div className="border p-6 shadow-md bg-white  ">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            price={parseFloat(selectedClass.price)}
            selectedClass={selectedClass}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
