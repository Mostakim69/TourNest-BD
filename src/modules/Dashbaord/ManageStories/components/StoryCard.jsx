const StoryCard = ({ story, setSelectedStory, handleDelete }) => {
  return (
    <div
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-500/30 transition duration-300 relative"
      data-aos="zoom-in"
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{story.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">
          {story.description}
        </p>
      </div>

      {story.images?.length > 0 && (
        <img
          src={story.images[0]}
          alt="Story Preview"
          className="w-full h-40 object-cover rounded-b-xl border-t border-gray-600"
        />
      )}

      <div className="flex justify-between items-center px-4 py-2 mt-1">
        <button
          onClick={() => setSelectedStory(story)}
          className="text-xs font-semibold text-blue-400 hover:text-blue-300"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => handleDelete(story._id)}
          className="text-xs text-red-400 hover:text-red-300"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
