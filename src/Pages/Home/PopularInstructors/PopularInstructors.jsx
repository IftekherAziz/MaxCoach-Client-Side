/* eslint-disable react/no-unescaped-entities */


const PopularInstructors = () => {
    return (
      <section className="mb-12 mx-10 md:mx-0">
        
        <div>
          <h2 className="text-4xl font-bold text-center mt-20 mb-5">
            Our Popular Instructors
          </h2>
          <hr className="w-1/3 mx-auto bg-orange-400 h-1" />
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

              <p className="text-sm text-justify">
                Emily Johnson is an award-winning photographer known for her
                captivating landscape photography. With over 10 years of
                experience in the field, Emily offers photography classes that
                focus on capturing the beauty of nature.Her classes provide
                valuable insights into composition, lighting, techniques
              </p>
              <span className="divider"></span>
              <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                <p className="text-md">
                  Students:{" "}
                  <span className="text-orange-500 font-medium">100</span>
                </p>
                <button className="btn btn-neutral">View Profile</button>
              </div>
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

              <p className="text-sm text-justify">
                Michael Rodriguez is a renowned portrait photographer with a
                passion for capturing the essence and emotions of his subjects.
                Through his photography classes, Michael shares his expertise in
                portrait lighting, posing, and creating a connection with the
                people in front of the camera.
              </p>
              <span className="divider"></span>
              <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                <p className="text-md">
                  Students:{" "}
                  <span className="text-orange-500 font-medium">100</span>
                </p>
                <button className="btn btn-neutral">View Profile</button>
              </div>
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

              <p className="text-sm text-justify">
                Sarah Thompson is a talented street photographer known for her
                ability to capture the vibrant energy and unique moments of
                urban life. In her photography classes, Sarah shares her
                knowledge and techniques for capturing compelling street
                photographs.
              </p>
              <span className="divider"></span>
              <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                <p className="text-md">
                  Students:{" "}
                  <span className="text-orange-500 font-medium">100</span>
                </p>
                <button className="btn btn-neutral">View Profile</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default PopularInstructors;