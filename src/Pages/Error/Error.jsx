import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.json";
import Lottie from "lottie-react";

const Error = () => {

  
  const { error } = useRouteError();
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-white">
        <Helmet>
          <title>MaxCoach | Error</title>
        </Helmet>
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <Lottie animationData={errorImg} />
          <div className="max-w-md text-center">         
            <p className="text-md font-semibold md:text-xl mb-10">
              {error?.message}
            </p>
            <Link to="/">
              <button className="btn mb-10 btn-neutral">Back to Home</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
