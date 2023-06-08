/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";

const Classes = () => {
  return (
    <section className="mb-12 mx-10 md:mx-0">
      <Helmet>
        <title>MaxCoach | Classes</title>
      </Helmet>
      <div>
        <h2 className="text-4xl font-bold text-center mt-20 mb-5">
          Browse All Classes
        </h2>
        <hr className="w-1/4 mx-auto bg-orange-400 h-1" />
      </div>
      <div className="flex flex-wrap justify-between items-center mt-20">
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src="https://cdn.pixabay.com/photo/2014/05/22/22/05/photo-351528_640.jpg"
              alt="Dslr Photography"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title">Mastering DSLR Photography</h2>
            <p className="text-md">
              Instructor :{" "}
              <span className="text-orange-500 font-medium">Maria Perez</span>
            </p>
            <div className="flex items-center justify-center gap-x-6 lg:justify-start">
              <p className="text-md">
                Available seats :{" "}
                <span className="text-orange-500 font-medium">20</span>
              </p>
              <p className="text-md">
                Price: <span className="text-orange-500 font-medium">$99</span>
              </p>
            </div>
            <span className="divider"></span>
            <button className="btn btn-neutral">Enroll Course</button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/20/22/04/camera-3244872_640.jpg"
              alt="Portrait Photography Essentials"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Portrait Photography Essentials</h2>
            <p className="text-md">
              Instructor :{" "}
              <span className="text-orange-500 font-medium">Maria Perez</span>
            </p>
            <div className="flex items-center justify-center gap-x-6 lg:justify-start">
              <p className="text-md">
                Available seats :{" "}
                <span className="text-orange-500 font-medium">20</span>
              </p>
              <p className="text-md">
                Price: <span className="text-orange-500 font-medium">$99</span>
              </p>
            </div>
            <span className="divider"></span>
            <button className="btn btn-neutral">Enroll Course</button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src="https://cdn.pixabay.com/photo/2020/06/26/21/36/sunset-5344024_640.jpg"
              alt="Landscape Photography"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Landscape Photography</h2>
            <p className="text-md">
              Instructor :{" "}
              <span className="text-orange-500 font-medium">Maria Perez</span>
            </p>
            <div className="flex items-center justify-center gap-x-6 lg:justify-start">
              <p className="text-md">
                Available seats :{" "}
                <span className="text-orange-500 font-medium">20</span>
              </p>
              <p className="text-md">
                Price: <span className="text-orange-500 font-medium">$99</span>
              </p>
            </div>
            <span className="divider"></span>
            <button className="btn btn-neutral">Enroll Course</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
