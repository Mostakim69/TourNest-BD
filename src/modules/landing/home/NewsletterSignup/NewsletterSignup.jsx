import { useState } from "react";
import { darkSwal } from "../../../../hooks/usePostData";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      darkSwal.fire({
        icon: "warning",
        title: "Please enter your email",
      });
      return;
    }
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      darkSwal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "You will get insider deals and travel hacks in your inbox.",
      });
      setEmail("");
    } catch {
      darkSwal.fire({
        icon: "error",
        title: "Subscription failed",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-3xl mx-auto" data-aos="fade-up">
        {/* Text Section */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Stay in the Loop
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for exclusive updates, special offers, and travel inspiration delivered straight to your inbox.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center w-full max-w-xl gap-3 sm:gap-4"
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 shadow-sm"
            required
            aria-label="Email Address"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all disabled:bg-indigo-400 disabled:cursor-not-allowed font-medium shadow-sm"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {/* Privacy Text */}
        <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
          By subscribing, you agree to our{' '}
          <a href="/privacy" className="underline hover:text-indigo-600 transition-colors">
            Privacy Policy
          </a>{' '}
          and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;