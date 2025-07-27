import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Link } from "react-router";

const CallToActionFull = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Marquee Heading */}
      <div className="opacity-20 absolute top-0 left-0 w-full z-0 pointer-events-none">
        <Marquee gradient={false} speed={50}>
          <h1 className="text-[clamp(60px,10vw,100px)] font-extrabold text-blue-400 whitespace-nowrap">
            TourNest BD • Explore • Discover • Travel •
          </h1>
        </Marquee>
      </div>

      {/* Main CTA */}
      <div
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
        data-aos="fade-up"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 drop-shadow-md"
        >
          Discover Bangladesh Like Never Before
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          ✈️ Uncover hidden gems, connect with expert guides, and craft unforgettable adventures with DeshGuide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/packages"
            className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300"
          >
            🌍 Start Your Adventure
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionFull;