import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const comment = form.comment.value;

    // post data to mongodb:
    fetch("https://max-coach.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        comment,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Helmet>
        <title>MaxCoach | Contact Us</title>
      </Helmet>
      <div className="mb-12 mx-10 ">
        <div>
          <Slide direction="down" duration={1500}>
            <h2 className="text-4xl font-bold text-center mt-20 mb-5">
              Get In Touch
            </h2>
            <hr className="w-1/6 mx-auto bg-teal-800 h-1" />
          </Slide>
        </div>
        <div className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="flex w-full  space-x-3 mb-20"
          >
            <div className="w-full max-w-4xl px-5 py-12 m-auto mt-10 bg-zinc-50 rounded-lg shadow ">
              <div className="grid max-w-3xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-1 mb-5">
                  <div className=" relative ">
                    <input
                      type="text"
                      name="name"
                      required
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1 mb-5">
                  <div className=" relative ">
                    <input
                      type="email"
                      name="email"
                      required
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="col-span-2 mb-3">
                  <div className=" relative ">
                    <input
                      type="number"
                      name="phone"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="col-span-2 mb-3">
                  <label className="text-gray-700">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your comment"
                      required
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-gradient-to-r from-black to-blue-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
