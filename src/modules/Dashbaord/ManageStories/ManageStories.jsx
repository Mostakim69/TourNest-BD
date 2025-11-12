import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
// import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import EditStoryModal from "./components/EditStoryModal";
import StoryCard from "./components/StoryCard";
import { darkSwal } from "../../../hooks/usePostData";
import useUserRole from "../../../hooks/useUserRole";
import { Link } from "react-router";

const ManageStories = () => {
  // const { user } = useAuth();

  const { userData } = useUserRole();
  const axiosSecure = useAxiosSecure();
  const [selectedStory, setSelectedStory] = useState(null);

  const {
    data: stories = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userStories", userData?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/stories/user/${userData._id}`);
      return res.data?.data;
    },
    enabled: !!userData?.email,
  });

  // console.log(userData, "userdata ManageStories.jsx", 33);
  // console.log(stories, "stories ManageStories.jsx", 34);
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this story?",
      text: "You won't be able to recover it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#374151",
      confirmButtonText: "Yes, delete it!",
      background: "#0f172a",
      color: "#f1f5f9",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/stories/${id}`);
        if (res.data.success) {
          darkSwal.fire("Deleted!", "Your story has been deleted.", "success");
          refetch();
        }
      } catch (err) {
        darkSwal.fire("Error!", err?.response?.data?.message, "error");
      }
    }
  };

  if (isLoading)
    return <div className="text-center py-10 text-info">Loading...</div>;
  if (isError)
    return (
      <div className="text-error text-center py-10">
        Failed to fetch stories.
      </div>
    );

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-accent">
        📝 Manage Your Stories
      </h2>

      {stories.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-gray-400 mt-10">
            You haven't shared any stories yet.
          </p>
          <Link
            to="/dashboard/add-stories"
            className="btn btn-primary glow-border px-6 py-2 mt-3 "
          >
            Share your story
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2  gap-6">
          {stories.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
              setSelectedStory={setSelectedStory}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {selectedStory && (
        <EditStoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default ManageStories;
