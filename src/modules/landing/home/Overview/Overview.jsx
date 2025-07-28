import { motion } from "framer-motion";
import {
  LucideGlobe,
  Users,
  BookOpen,
  CreditCard,
  LayoutDashboard,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    icon: <LucideGlobe size={28} />,
    title: "Discover Destinations",
    description:
      "Explore breathtaking locations with photos, maps, and details.",
  },
  {
    icon: <Users size={28} />,
    title: "Hire Trusted Guides",
    description: "Connect with verified local guides for personalized tours.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Share Travel Stories",
    description: "Post your real travel experiences with photos and tips.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Secure Stripe Payments",
    description: "Book and pay seamlessly using Stripe — fast and reliable.",
  },
  {
    icon: <LayoutDashboard size={28} />,
    title: "Smart Dashboards",
    description: "Role-based control panels for users, guides, and admins.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Fully Responsive UI",
    description:
      "Smooth on mobile, tablet, and desktop with a night-themed aesthetic.",
  },
];

export default function Overview() {
  return (
    <section className=" text-white py-20 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse">
          What is TourNest BD ?
        </h2>
        <p className=" text-lg mb-12 max-w-3xl mx-auto">
          <span className="text-white font-semibold">TourNest BD</span> is a
          modern tourism platform connecting travelers, guides, and
          storytellers—crafted for seamless discovery, booking, and sharing.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden p-6 bg-gradient-to-br from-[#1a1c2b] to-[#11131f] border border-[#2d2f43] rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-up-right"
            >
              <div className="absolute inset-0 bg-[#00FFC6] opacity-0 group-hover:opacity-10 blur-xl rounded-2xl pointer-events-none transition-all" />
              <div className="group flex flex-col items-center">
                <div className="mb-4 p-4 rounded-full bg-[#1e293b] text-[#00FFC6] group-hover:animate-pulse">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
