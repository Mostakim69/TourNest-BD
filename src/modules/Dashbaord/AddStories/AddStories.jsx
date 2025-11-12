import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useUserRole from "../../../hooks/useUserRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../hooks/usePostData";

const AddStories = () => {
  const { user } = useAuth();
  const { userData } = useUserRole();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Mutation to post story
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosSecure.post("/stories", payload);
      return res.data;
    },
    onSuccess: () => {
      darkSwal.fire("Success!", "Your story has been posted.", "success");
      // navigate("/stories"); // redirect to stories page
      setTimeout(() => {
        navigate("/dashboard/manage-stories");
      }, 2000);
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to post story.");
      darkSwal.fire("Error!", err.message || "Failed to post story.", "error");
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      title: data.title,
      description: data.description,
      images: data.images.split(",").map((url) => url.trim()),
      userId: userData?._id,
      userName: userData?.name,
      userPhoto: user?.photoURL,
    };

    await mutateAsync(payload);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-white">Share Your Story</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-white mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-white mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="images" className="block text-white mb-1">
            Image URLs (comma separated)
          </label>
          <input
            type="text"
            id="images"
            {...register("images", {
              required: "At least one image URL is required",
            })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-md transition disabled:opacity-50"
        >
          {isPending ? "Posting..." : "Post Story"}
        </button>
      </form>
    </div>
  );
};

export default AddStories;
