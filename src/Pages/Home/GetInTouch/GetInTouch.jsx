import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div>
      <div className="bg-zinc-50 mb-10 mx-10 md:mx-0 rounded">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <Fade>
            <h2 className="text-3xl font-bold text-black  md:text-4xl">
              <span className="block">Ready to start learning?</span>
            </h2>
          </Fade>

          <p className="text-md mt-6 max-w-xl mx-auto ">
            Our courses are designed to take beginners to an advanced level or
            fill in the gaps that the more experienced photographer may have.
          </p>

          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-6 inline-flex rounded-md shadow">
              <Link to="/contact">
                <button type="button" className="btn btn-neutral ">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
