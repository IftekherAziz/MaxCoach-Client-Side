/* eslint-disable react/no-unescaped-entities */

const PopularClasses = () => {
  return (
    <section className="mb-12 mx-10 md:mx-0">
      <div>
        <h2 className="text-4xl font-bold text-center mt-20 mb-5">
           Popular Classes
        </h2>
        <hr className="w-1/6 mx-auto bg-teal-800 h-1" />
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
              Students: <span className="text-teal-800 font-medium">100</span>
            </p>
            <p className="text-sm">
              Unlock your DSLR's potential. Learn exposure, composition,
              lighting, and editing for stunning photos.{" "}
            </p>
            <span className="divider"></span>
            <div className="flex items-center justify-center gap-x-6 lg:justify-start">
              <p className="font-semibold text-lg">$49.99</p>
              <button className="btn btn-neutral">Add To Cart</button>
            </div>
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
              Students: <span className="text-teal-800  font-medium">120</span>
            </p>
            <p className="text-sm">
              Capture captivating portraits. Master lighting, posing, and
              connection with subjects. Elevate your skills.{" "}
            </p>
            <span className="divider"></span>
            <div className="flex items-center justify-center gap-x-6 lg:justify-start">
              <p className="font-semibold text-lg">$89.99</p>
              <button className="btn btn-neutral">Add To Cart</button>
            </div>
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
              Students:
              <span className="text-teal-800  font-medium"> 80</span>
            </p>
            <p className="text-sm">
              Explore breathtaking landscapes. Master composition, lighting, and
              natural beauty in your photos.
            </p>
            <span className="divider"></span>
            <div className="flex items-center justify-center gap-x-6 lg:justify-start">
              <p className="font-semibold text-lg">$99.99</p>
              <button className="btn btn-neutral">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
