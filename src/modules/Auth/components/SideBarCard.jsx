const SideBarCard = ({ sideBar }) => {
  const { title, description } = sideBar;

  return (
    <div
      className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] 
                 p-4 rounded-2xl shadow-md transition-all duration-300 
                 hover:scale-[1.02] hover:shadow-purple-500 
                 hover:glow-border hover:pulse-glow hover:bg-[#1e1b37]/50 cursor-default"
    >
      <h3 className="text-lg font-semibold bg-gradient-to-r from-[#302b63] via-purple-400 to-indigo-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default SideBarCard;