import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaRocket,
  FaRegHandshake,
  FaRegSmile,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-3xl text-sky-400" />,
    title: "Verified & Trusted",
    description:
      "Every tour guide is manually verified to ensure safety, trust, and local authenticity.",
  },
  {
    icon: <FaRocket className="text-3xl text-purple-400" />,
    title: "Fast & Flexible",
    description:
      "Instant booking, live updates, and a wide range of destinations to fit your travel style.",
  },
  {
    icon: <FaRegHandshake className="text-3xl text-pink-400" />,
    title: "Local Partnerships",
    description:
      "We collaborate with local businesses and guides to boost the regional economy.",
  },
  {
    icon: <FaRegSmile className="text-3xl text-indigo-400" />,
    title: "Satisfaction First",
    description:
      "Transparent pricing, real reviews, and human support ensure a smooth experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" text-white py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse">
        🌟 Why Choose TourNest BD?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <div key={index} data-aos="zoom-out-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#111827] border border-purple-700 hover:border-sky-500 p-6 text-center shadow-[0_0_20px_#7c3aed33] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
