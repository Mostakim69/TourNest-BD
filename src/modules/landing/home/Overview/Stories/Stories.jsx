import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../hooks/useAxiosSecure";
import StoryCard from "./StoryCard";
import Spinner from "../../../../shared/Layout/Spinner";
import { Link, useLocation } from "react-router";

const Stories = ({ apiEndpoint }) => {
  const location = useLocation();
  const isStoriesPage = location.pathname.toLowerCase().includes("community");

  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosInstance.get(apiEndpoint);
      return res.data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  // ✅ Show 4 cards unless it's the community page
  const displayedStories = isStoriesPage ? stories : stories.slice(0, 4);

  return (
    <section className="px-4 py-16" data-aos="fade-up-left">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse">
        🌌 What's our community share!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {displayedStories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>

      {/* ✅ Show 'View All' only on non-community page */}
      {!isStoriesPage && (
        <div className="text-center mt-8">
          <Link
            className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition"
            to="/community"
          >
            View All Stories
          </Link>
        </div>
      )}
    </section>
  );
};

export default Stories;