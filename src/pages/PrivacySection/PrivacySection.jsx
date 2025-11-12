import React from "react";
import { motion } from "framer-motion";

const PrivacySection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8"
          variants={fadeInUp}
        >
          Term & Privacy Policy
        </motion.h2>

        <motion.p className="mb-4 text-gray-700 text-base sm:text-lg" variants={fadeInUp}>
          Your privacy is important to us. We are committed to protecting your personal information and being transparent about the data we collect.
        </motion.p>
        <motion.p className="mb-4 text-gray-700 text-base sm:text-lg" variants={fadeInUp}>
          We only collect necessary information to provide and improve our services. Your data will never be sold or shared without your consent.
        </motion.p>

        <motion.h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 text-gray-800" variants={fadeInUp}>
          Data Collection
        </motion.h3>
        <motion.ul className="list-disc list-inside text-gray-700 space-y-2 text-base sm:text-lg" variants={fadeInUp}>
          <li>Information you provide directly (e.g., name, email).</li>
          <li>Information collected automatically (e.g., usage data, cookies).</li>
          <li>Third-party services you interact with through our platform.</li>
        </motion.ul>

        <motion.h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 text-gray-800" variants={fadeInUp}>
          Cookies
        </motion.h3>
        <motion.p className="text-gray-700 mb-4 text-base sm:text-lg" variants={fadeInUp}>
          We use cookies to enhance your experience on our website. You can choose to disable cookies in your browser settings, but some features may not work properly.
        </motion.p>

        <motion.h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 text-gray-800" variants={fadeInUp}>
          Contact Us
        </motion.h3>
        <motion.p className="text-gray-700 text-base sm:text-lg" variants={fadeInUp}>
          If you have any questions about our privacy practices, you can reach us at{" "}
          <a href="mailto:mdmostakimhosen35@gmail.com" className="text-blue-600 underline">
            mdmostakimhosen35@gmail.com
          </a>.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PrivacySection;
