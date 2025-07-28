import { motion } from "framer-motion";
import { Link } from "react-router";
import { FacebookShareButton, FacebookIcon } from "react-share";
import Swal from "sweetalert2";
import useAuth from "../../../../../hooks/useAuth";

const StoryCard = ({ story }) => {
  const { user } = useAuth();
  const shareUrl = `${window.location.origin}/community/${story._id}`;

  const handleShareClick = () => {
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to be logged in to share stories",
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
      });
    }
  };

  return (
    <motion.div
      key={story._id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1b2d] to-[#0f172a] border border-indigo-600 shadow-[0_0_25px_#6366f180] hover:scale-[1.02] hover:shadow-[0_0_40px_#7c3aed88] transition-all duration-300 backdrop-blur-md"
    >
      {/* Image Side */}
      <div className="relative group md:w-1/2">
        <img
          src={story.images?.[0]}
          alt={story.title}
          className="w-full h-72 md:h-full object-cover transition-transform duration-300 group-hover:scale-105 border-b-4 md:border-b-0 md:border-r-4 border-indigo-400 shadow-[0_4px_30px_rgba(99,102,241,0.6)]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
          <h3 className="text-xl font-semibold text-sky-300 group-hover:text-indigo-300 transition-colors">
            {story.title}
          </h3>
        </div>
      </div>

      {/* Text and Buttons Side */}
      <div className="flex flex-col justify-between p-5 space-y-4 md:w-1/2">
        {/* Title (only visible in desktop) */}
        <h3 className="hidden md:block text-2xl font-semibold text-sky-300 hover:text-indigo-300 transition-colors">
          {story.title}
        </h3>

        <p className="text-sm text-gray-300 line-clamp-5 leading-relaxed">
          {story.description}
        </p>

        <div className="flex items-center justify-between pt-4 mt-auto">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={story?.userPhoto || "https://avatar.iran.liara.run/public"}
              className="w-11 h-11 rounded-full border-[2px] border-purple-500 shadow-md"
            />
            <div>
              <p className="font-semibold text-violet-300 hover:text-sky-400 transition-colors duration-200">
                {story.userName}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(story.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Share Button */}
          <div className="flex gap-2">
            {user ? (
              <FacebookShareButton
                url={shareUrl}
                quote={`Check out this travel story: ${story.title}`}
                className="flex items-center"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            ) : (
              <button
                onClick={handleShareClick}
                className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <FacebookIcon size={32} round />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryCard;
