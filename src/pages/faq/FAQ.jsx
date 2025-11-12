import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./faq.constant";
import TypewriterText from "../../utils/TypeWriterEffect"; // Adjust path as needed

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants for the accordion content
  const contentVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: { height: "auto", opacity: 1, overflow: "hidden" },
    exit: { height: 0, opacity: 0, overflow: "hidden" },
  };

  return (
    <section
      className="max-w-5xl mx-auto px-4 py-20 text-white space-y-12"
      data-aos="fade-in" // Use AOS attribute directly
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse">
        <TypewriterText
          words={[
            "💡 Frequently Asked Questions",
            "🤔 What Tourists Often Ask",
            "📌 Your Curiosity, Answered",
          ]}
          loop
          delay={1500}
          speed={80}
        />
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-purple-700 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            data-aos="fade-down-left"
            data-aos-delay={idx * 100} // Staggered animation for each FAQ
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center cursor-pointer px-6 py-4 text-left hover:bg-[#1f2937] transition-colors duration-300 group"
            >
              <span className="text-lg md:text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-pink-400 text-2xl"
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  key={`content-${idx}`} // Unique key per FAQ item to prevent animation conflicts
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-5 text-sm md:text-base text-gray-300 leading-relaxed"
                >
                  <p className="border-l-4 border-purple-500 pl-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;