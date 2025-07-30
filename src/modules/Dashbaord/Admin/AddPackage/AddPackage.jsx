import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { darkSwal } from "../../../../hooks/usePostData";

const AddPackage = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      days: 1,
      tripType: "Adventure",
      location: "",
      gallery: ["", ""],
      tourPlan: [{ day: 1, activities: "" }],
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "tourPlan",
  });

  const days = useWatch({ control, name: "days" });

  // Auto-adjust tourPlan array based on days
  useEffect(() => {
    const numDays = Number(days) || 1;
    const currentPlans = getValues("tourPlan") || [];
    const newPlans = [];

    for (let i = 1; i <= numDays; i++) {
      newPlans.push(currentPlans[i - 1] || { day: i, activities: "" });
    }
    replace(newPlans);
  }, [days, replace, getValues]);

  // Mutation for POST
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/packages", data);
      return res.data;
    },
    onSuccess: () => {
      darkSwal.fire({
        icon: "success",
        title: "Package Added",
        text: "Your travel package has been successfully posted!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      setTimeout(() => navigate("/all-trips"), 500);
    },
    onError: (error) => {
      darkSwal.fire({
        icon: "error",
        title: "Failed",
        text: error?.response?.data?.message || "Something went wrong!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    },
  });

  // Validate TourPlan
  const validateTourPlan = () => {
    const numDays = Number(getValues("days"));
    const requiredDays = Math.min(numDays, 4); // First 4 days required
    const plans = getValues("tourPlan");

    for (let i = 0; i < requiredDays; i++) {
      if (!plans[i]?.activities?.trim()) return false;
    }
    return true;
  };

  const onSubmit = (data) => {
    data.price = Number(data.price);
    data.days = Number(data.days);
    data.tourPlan.forEach((plan, i) => {
      plan.day = i + 1;
    });

    if (!validateTourPlan()) {
      darkSwal.fire({
        icon: "warning",
        title: "Incomplete Tour Plan",
        text: `Please fill activities for Day 1 to Day ${Math.min(data.days, 4)}.`,
        background: "#0f172a",
        color: "#fff",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    mutation.mutate(data);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#0f172a] text-white shadow-2xl border border-[#1f2937] mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      data-aos="fade-up"
    >
      <h1 className="text-3xl font-bold mb-6 text-center glow-text">
        Add New Travel Package
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="label">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
            placeholder="Sajek Adventure"
          />
          {errors.title && (
            <p className="text-red-400 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "At least 10 characters required",
              },
            })}
            className="textarea textarea-bordered w-full bg-[#1e293b] text-white focus:textarea-accent"
            placeholder="A trip to the scenic Sajek Valley"
          />
          {errors.description && (
            <p className="text-red-400 mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Price + Days */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="label">Price (৳)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be positive" },
              })}
              className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
              placeholder="4500"
            />
            {errors.price && (
              <p className="text-red-400 mt-1">{errors.price.message}</p>
            )}
          </div>
          <div className="flex-1">
            <label className="label">Days</label>
            <input
              type="number"
              {...register("days", {
                required: "Days required",
                min: { value: 1, message: "At least 1 day" },
              })}
              className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
              placeholder="3"
            />
            {errors.days && (
              <p className="text-red-400 mt-1">{errors.days.message}</p>
            )}
          </div>
        </div>

        {/* Trip Type */}
        <div>
          <label className="label">Trip Type</label>
          <select
            {...register("tripType", { required: true })}
            className="select select-bordered w-full bg-[#1e293b] text-white focus:select-accent"
          >
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Cultural">Cultural</option>
            <option value="Nature">Nature</option>
            <option value="Historical">Historical</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="label">Location</label>
          <input
            {...register("location", { required: "Location is required" })}
            className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
            placeholder="Sajek"
          />
          {errors.location && (
            <p className="text-red-400 mt-1">{errors.location.message}</p>
          )}
        </div>

        {/* Gallery URLs */}
        <div>
          <label className="label">Gallery URLs</label>
          {["gallery.0", "gallery.1", "gallery.2"].map((field, idx) => (
            <div key={idx} className="mb-2">
              <input
                {...register(field, {
                  required: `Image ${idx + 1} URL required`,
                  pattern: {
                    value: /^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i,
                    message: "Must be a valid image URL",
                  },
                })}
                className="input input-bordered bg-[#1e293b] text-white w-full focus:input-accent"
                placeholder={`https://img.url/${idx + 1}.jpg`}
              />
              {errors.gallery?.[idx] && (
                <p className="text-red-400 mt-1">
                  {errors.gallery[idx].message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Tour Plan */}
        <div>
          <label className="label">Tour Plan</label>
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-2 items-center mb-2"
            >
              <input
                type="number"
                {...register(`tourPlan.${index}.day`)}
                className="input input-sm col-span-2 input-bordered bg-[#1e293b] text-white"
                readOnly
              />
              <input
                {...register(`tourPlan.${index}.activities`, {
                  required:
                    index < 4
                      ? `Activities for Day ${index + 1} required`
                      : false,
                })}
                className="input input-sm col-span-9 input-bordered bg-[#1e293b] text-white"
                placeholder="Activities"
              />
              {fields.length > 1 && index >= 4 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="btn btn-sm btn-error col-span-1"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ day: fields.length + 1, activities: "" })}
            className="btn btn-outline btn-accent mt-2 hover:shadow-[0_0_10px_#38bdf8] hover:scale-105 transition-all"
          >
            ➕ Add Day
          </button>
        </div>

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="btn btn-primary px-10 text-lg tracking-wide transition hover:scale-105 hover:shadow-[0_0_15px_#3b82f6] duration-300 rounded-full"
          >
            🚀 Add Package
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddPackage;
