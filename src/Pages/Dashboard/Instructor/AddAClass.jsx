import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";

const AddAClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const [userFromDB] = useUser();
  // console.log(userFromDB);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgURL = imgResponse.data.display_url;
        const {
          className,
          instructorName,
          instructorEmail,
          availableSeats,
          price,
        } = data;
        const newItem = {
          className,
          instructorName,
          instructorEmail,
          availableSeats,
          price,
          image: imgURL,
          status: "pending",
          enrolled_students: 0,
          feedback: "",
        };
        axiosSecure.post("/classes", newItem).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class has been added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
  };

  return (
    <div className="max-w-xs mx-auto md:max-w-full">
      <Helmet>
        <title>MaxCoach | Add A Class</title>
      </Helmet>    
      <div className="mb-6 shadow-md py-5 bg-zinc-50">
        <h2 className="text-center text-2xl font-bold  text-teal-800">
          Add A Class
        </h2>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border p-5 md:p-10 bg-zinc-50"
        >
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text font-semibold">Class Name*</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("className", { required: true, maxLength: 120 })}
              className={`input input-bordered w-full ${
                errors.className ? "input-error" : ""
              }`}
            />
            {errors.className && (
              <span className="text-red-500">Class Name is required</span>
            )}
          </div>
          <div className="flex mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Instructor Name
                </span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={userFromDB?.name}
                placeholder="Instructor Name"
                {...register("instructorName", { required: true })}
                className={`input input-bordered w-full ${
                  errors.instructorName ? "input-error" : ""
                }`}
              />
              {errors.instructorName && (
                <span className="text-red-500">
                  Instructor Name is required
                </span>
              )}
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Instructor Email
                </span>
              </label>
              <input
                type="email"
                readOnly
                defaultValue={userFromDB?.email}
                placeholder="Instructor Email"
                {...register("instructorEmail", { required: true })}
                className={`input input-bordered w-full ${
                  errors.instructorEmail ? "input-error" : ""
                }`}
              />
              {errors.instructorEmail && (
                <span className="text-red-500">
                  Instructor Email is required
                </span>
              )}
            </div>
          </div>
          <div className="flex mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Available Seats*
                </span>
              </label>
              <input
                type="number"
                min="0"
                {...register("availableSeats", { required: true })}
                placeholder="Available Seats"
                className={`input input-bordered w-full ${
                  errors.availableSeats ? "input-error" : ""
                }`}
              />
              {errors.availableSeats && (
                <span className="text-red-500">
                  Available Seats is required
                </span>
              )}
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Course Price*</span>
              </label>
              <input
                type="number"
                min="0"
                step="any"
                {...register("price", { required: true })}
                placeholder="Course Price"
                className={`input input-bordered w-full ${
                  errors.price ? "input-error" : ""
                }`}
              />
              {errors.price && (
                <span className="text-red-500">Course Price is required</span>
              )}
            </div>
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Class Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full md:w-6/12"
            />
            {errors.image && (
              <span className="text-red-500">Class Image is required</span>
            )}
          </div>
          <input
            className="btn btn-neutral w-full mt-4"
            type="submit"
            value="Add A Class"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
