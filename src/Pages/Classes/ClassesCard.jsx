

const ClassesCard = () => {
    return (
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
    );
};

export default ClassesCard;