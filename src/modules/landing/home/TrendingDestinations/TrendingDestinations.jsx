import { motion } from "framer-motion";

const trendingSpots = [
  {
    name: "🌊 Saint Martin",
    image: "https://i.pinimg.com/736x/cc/7b/38/cc7b389b5c840e39854cf76417a7116a.jpg",
    description:
      "A serene island in the Bay of Bengal, famous for crystal clear water, coral reefs, and calm vibes.",
  },
  {
    name: "🏞️ Sajek Valley",
    image: "https://i.pinimg.com/736x/cc/7b/38/cc7b389b5c840e39854cf76417a7116a.jpg",
    description:
      "A dreamy mountain valley in Rangamati with endless green, cloud-kissed mornings, and wooden cottages.",
  },
  {
    name: "🏖️ Cox’s Bazar",
    image: "https://i.pinimg.com/736x/cc/7b/38/cc7b389b5c840e39854cf76417a7116a.jpg",
    description:
      "Home to the world’s longest sea beach, perfect for beach lovers, surfers, and seafood enthusiasts.",
  },
  {
    name: "🌲 Bandarban",
    image: "https://i.pinimg.com/736x/cc/7b/38/cc7b389b5c840e39854cf76417a7116a.jpg",
    description:
      "Adventure-packed hills, waterfalls, tribal villages, and peaceful trekking through nature’s best.",
  },
];

const TrendingDestinations = () => {
  return (
    <section className=" py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse"
        >
          🔥 Trending Destinations
        </motion.h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Discover the most loved destinations by our travelers this week.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trendingSpots.map((spot, i) => (
            <div key={spot.name} data-aos="flip-left">
              <motion.div
                
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative overflow-hidden group rounded-2xl border border-sky-700 bg-gradient-to-br from-[#111827] to-[#0f172a] shadow-[0_0_30px_#0ea5e944] hover:shadow-[0_0_40px_#38bdf8aa] transition-all duration-300"
              >
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-3 left-3 bg-sky-700/90 px-3 py-1 text-xs rounded-full font-semibold shadow shadow-cyan-800">
                  🚀 Hot Spot
                </div>
                <div className="relative z-10 p-4 bg-black/60 backdrop-blur-md">
                  <h3 className="text-lg font-bold text-sky-300">
                    {spot.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {spot.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
