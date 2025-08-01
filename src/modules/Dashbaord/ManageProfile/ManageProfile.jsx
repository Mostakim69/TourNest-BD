import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../shared/Layout/Spinner";
import { useState, useEffect } from "react";
import "dayjs/locale/en";
import { Link } from "react-router";
import useUserRole from "../../../hooks/useUserRole";
import PageIntro from "../../../utils/PageIntro";
import { swalErrorToast, swalSuccessToast } from "../../shared/ui/swalToast";

dayjs.extend(relativeTime);

const ManageProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const { userData } = useUserRole();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      photoURL: "",
    },
  });

  const { data: userInfo = {}, isPending } = useQuery({
    queryKey: ["manage-profile", userData?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email/${userData?.email}`);
      return res.data?.data;
    },
    enabled: !!userData?.email,
  });

  // Reset form when userInfo changes
  useEffect(() => {
    if (userInfo?.name || userInfo?.photoURL) {
      reset({
        name: userInfo.name || "",
        photoURL: userInfo.photoURL || "",
      });
    }
  }, [userInfo, reset]);

  // Mutation for updating profile
  const updateProfileMutation = useMutation({
    mutationFn: async (updateData) => {
      // Update Firebase Auth profile
      await updateProfile(user, {
        displayName: updateData.name,
        photoURL: updateData.photoURL,
      });

      // Update MongoDB database
      const res = await axiosSecure.patch(`/users/${userInfo._id}`, {
        name: updateData.name,
        photoURL: updateData.photoURL,
      });

      return res.data;
    },
    onSuccess: () => {
      // Invalidate and refetch user data
      queryClient.invalidateQueries({
        queryKey: ["manage-profile", userData?.email],
      });

      swalSuccessToast({
        title: "Profile Updated!",
        text: "Your profile has been updated successfully.",
      });

      setShowModal(false);
    },
    onError: (error) => {
      console.error("Profile update error:", error);
      swalErrorToast({
        title: "Update Failed!",
        text:
          error.response?.data?.message ||
          "Failed to update profile. Please try again.",
      });
    },
  });

  const onSubmit = async (data) => {
    updateProfileMutation.mutate(data);
  };

  const openModal = () => {
    // Reset form to current user info when opening modal
    reset({
      name: userInfo?.name || "",
      photoURL: userInfo?.photoURL || "",
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    reset(); // Reset form on close
  };

  if (isPending)
    return (
      <div className="text-center mt-10">
        <Spinner />
      </div>
    );

  const { name, email, photoURL, role, createdAt, last_loggedIn } =
    userInfo || {};

  const completeness =
    ([name, email, photoURL].filter(Boolean).length / 3) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 md:p-10 rounded-xl bg-gradient-to-br from-[#0f1328] to-[#1a1f3b] shadow-xl text-white space-y-6"
      data-aos="fade-up"
    >
      <PageIntro
        h1={`👋 Welcome , ${name || "Explorer"}`}
        p={`You can update your profile details and manage your account.`}
      />
      <div className="flex flex-col d:flex-row gap-6 items-center">
        <div className="relative">
          <img
            src={photoURL || "https://avatar.iran.liara.run/public"}
            alt="User"
            className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/50 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
            style={{
              boxShadow:
                "0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.2)",
            }}
            data-aos="zoom-in"
          />
          {/* Neon glow ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 animate-pulse"></div>
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-lg text-cyan-300 font-medium">📧 {email}</p>
          <p className="text-md text-gray-300">
            🔐 Role: <span className="font-semibold text-cyan-400">{role}</span>
          </p>
          <p className="text-md text-gray-400">
            🕓 Account Created:{" "}
            <span className="text-green-400">
              {dayjs(createdAt).format("MMM D, YYYY")} (
              {dayjs(createdAt).fromNow()})
            </span>
          </p>
          <p className="text-md text-gray-400">
            🕘 Last Logged In:{" "}
            <span className="text-yellow-300">
              {dayjs(last_loggedIn).format("MMM D, YYYY h:mm A")} (
              {dayjs(last_loggedIn).fromNow()})
            </span>
          </p>
          <p className="text-md text-gray-400">
            👥 Profile Completeness:{" "}
            <span
              className={`font-bold ${
                completeness >= 100
                  ? "text-green-400"
                  : completeness >= 60
                    ? "text-yellow-400"
                    : "text-red-400"
              }`}
            >
              {Math.round(completeness)}%
            </span>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div
        className="flex flex-col md:flex-row md:justify-center gap-4 mt-6 *:rounded-full *:max-md:max-w-[300px] max-md:*:mx-auto"
        data-aos="fade-up"
      >
        <button
          className="btn btn-outline btn-block md:btn-wide border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white pulse-glow"
          onClick={openModal}
          disabled={updateProfileMutation.isPending}
        >
          {updateProfileMutation.isPending ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Updating...
            </>
          ) : (
            "✏️ Update Profile"
          )}
        </button>

        {role === "tourist" && (
          <Link
            to="/dashboard/tourist/join-tour-guide"
            className="btn btn-outline btn-block md:btn-wide border-emerald-500 text-emerald-300 hover:bg-emerald-600 hover:text-white pulse-glow"
          >
            ✨ Join as Tour Guide
          </Link>
        )}
      </div>

      {/* DaisyUI Modal with React Hook Form */}
      {showModal && (
        <dialog
          id="update_modal"
          className="modal modal-open"
          data-aos="zoom-in"
        >
          <div className="modal-box bg-[#1c233d] text-white border border-cyan-600 shadow-xl">
            <h3 className="font-bold text-lg mb-4">Update Profile Info</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={`input input-bordered w-full bg-[#0f1328] text-white border-gray-600 focus:border-cyan-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Name must be less than 50 characters",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Photo URL Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Enter photo URL"
                  className={`input input-bordered w-full bg-[#0f1328] text-white border-gray-600 focus:border-cyan-500 ${
                    errors.photoURL ? "border-red-500" : ""
                  }`}
                  {...register("photoURL", {
                    pattern: {
                      value: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i,
                      message:
                        "Please provide a valid image URL (jpg, jpeg, png, gif, webp)",
                    },
                  })}
                />
                {errors.photoURL && (
                  <span className="text-red-400 text-sm mt-1">
                    {errors.photoURL.message}
                  </span>
                )}
              </div>

              {/* Live Preview */}
              {watch("photoURL") && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Preview</span>
                  </label>
                  <div className="flex justify-center">
                    <img
                      src={watch("photoURL")}
                      alt="Preview"
                      className="w-20 h-20 rounded-full border-2 border-cyan-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="modal-action">
                <button
                  type="submit"
                  className="btn bg-cyan-600 text-white hover:bg-cyan-700"
                  disabled={isSubmitting || updateProfileMutation.isPending}
                >
                  {isSubmitting || updateProfileMutation.isPending ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-ghost text-gray-300"
                  onClick={closeModal}
                  disabled={isSubmitting || updateProfileMutation.isPending}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </motion.div>
  );
};

export default ManageProfile;