import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUserRole from "../../../../hooks/useUserRole";
import { darkSwal } from "../../../../hooks/usePostData";

const JoinTourGuide = () => {
  const { userData } = useUserRole();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  // console.log(`userData?._id`, userData?._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Mutation: POST request to JoinTourGuide
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosSecure.post("tour-guide-requests", payload);
      return res.data;
    },
    onSuccess: () => {
      darkSwal.fire(
        "Request Sent!",
        "We'll review your application shortly.",
        "success",
      );
      setTimeout(() => navigate("/dashboard"), 2000);
      reset();
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to submit application.");
      darkSwal.fire(
        "Error!",
        err?.response?.data?.message || "Submission failed.",
        "error",
      );
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      userId: userData?._id,
      title: data.title,
      reason: data.reason,
      cvLink: data.cvLink,
    };
    await mutateAsync(payload);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f172a] to-black text-white px-4 py-16">
      {/* Bold confident intro */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg">
          Ready to Guide the World?
        </h1>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Join TourNest BD as a certified tour guide and lead unforgettable
          journeys. Submit your profile below — passion and authenticity matter
          most.
        </p>
      </motion.div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-aos="fade-up"
        className="max-w-2xl mx-auto bg-base-200 p-8 rounded-xl shadow-xl border border-gray-700 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="label font-semibold text-white">Title</label>
          <input
            type="text"
            placeholder="e.g., Veteran Nature Explorer"
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 100, message: "Max 100 characters allowed" },
            })}
            className="input input-bordered w-full bg-black/40 text-white backdrop-blur hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
          />
          {errors.title && (
            <p className="text-red-400 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Reason */}
        <div>
          <label className="label font-semibold text-white">
            Why do you want to be a guide?
          </label>
          <textarea
            rows={4}
            placeholder="Your passion, knowledge, and story..."
            {...register("reason", {
              required: "This field is required",
              minLength: { value: 20, message: "Minimum 20 characters" },
            })}
            className="textarea textarea-bordered w-full bg-black/40 text-white hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300"
          />
          {errors.reason && (
            <p className="text-red-400 mt-1">{errors.reason.message}</p>
          )}
        </div>

        {/* CV Link */}
        <div>
          <label className="label font-semibold text-white">
            CV Link (PDF)
          </label>
          <input
            type="url"
            placeholder="https://yourcvlink.com/cv.pdf"
            {...register("cvLink", {
              required: "CV link is required",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Enter a valid URL",
              },
            })}
            className="input input-bordered w-full bg-black/40 text-white hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
          />
          {errors.cvLink && (
            <p className="text-red-400 mt-1">{errors.cvLink.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-accent btn-sm px-6 text-white tracking-wider shadow hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {isPending ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinTourGuide;
