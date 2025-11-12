import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Packages", value: 100, suffix: "+" },
  { label: "Guides", value: 50, suffix: "+" },
  { label: "Districts", value: 25, suffix: "+" },
  { label: "Bookings", value: 3000, suffix: "+" },
];

const LiveStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // count only once
    threshold: 0.3, // trigger when 30% visible
  });

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 py-16 bg-[#0f172a] text-white rounded-3xl shadow-lg shadow-purple-900/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map(({ label, value, suffix }, i) => (
          <div key={label} className="space-y-2" data-aos="flip-right">
            <p className="text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
              {inView ? (
                <CountUp
                  end={value}
                  duration={4}
                  suffix={suffix}
                  separator=","
                />
              ) : (
                `0${suffix}`
              )}
            </p>
            <p className="text-lg text-indigo-300 font-semibold tracking-wider">
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default LiveStats;
