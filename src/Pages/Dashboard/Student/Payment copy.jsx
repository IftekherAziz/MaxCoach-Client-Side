import { Helmet } from "react-helmet";
import CheckoutForm from "./CheckoutForm";
import useEnroll from "../../../Hooks/useEnroll";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const {id} = useParams();
  console.log(id);
  // Get the cart from useCart Hook:
  const [cart] = useEnroll();
  // Get the price from the cart
  const price = cart?.price;
  console.log(price);

  return (
    <div>
      <Helmet>
        <title>MaxCoach | Payment </title>
      </Helmet>
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Make Payment
        </h2>
      </div>
      {/* Use stripe checkout form using elements and stripePromise props */}
      <div className=" p-10 border ">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
