import { Helmet } from "react-helmet";

const Instructors = () => {
  return (
    <section className="mb-12 mx-10 md:mx-0">
      <Helmet>
        <title>MaxCoach | Instructors</title>
      </Helmet>
      <div>
        <h2 className="text-4xl font-bold text-center mt-20 mb-5">
          All Instructors
        </h2>
        <hr className="w-1/4 mx-auto bg-orange-400 h-1" />
      </div>
      <div className="flex flex-wrap justify-between items-center mt-20">
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_640.jpg"
              alt="Dslr Photography"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title">Emily Johnson</h2>
            <p className="text-sm text-justify">Email: emily@gmail.com</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_640.jpg"
              alt="Dslr Photography"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title">Michael Rodriguez</h2>
            <p className="text-sm text-justify">Email: michael@gmail.com</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/22/07/31/portrait-3098319_640.jpg"
              alt="Dslr Photography"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title">Sarah Thompson</h2>
            <p className="text-sm text-justify">Email: sarah@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
