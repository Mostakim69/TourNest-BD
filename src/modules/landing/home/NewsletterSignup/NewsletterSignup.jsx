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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto" data-aos="fade-up">
        {/* Text Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse">
            Stay in the Loop
          </h1>
          <p className="text-base text-white max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive updates, special offers, and travel inspiration delivered straight to your inbox.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl"
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white text-gray-900 placeholder-gray-400"
            required
            aria-label="Email Address"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all disabled:bg-blue-400 disabled:cursor-not-allowed font-medium"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {/* Privacy Text */}
        <p className="text-sm text-gray-500 text-center">
          By subscribing, you agree to our{' '}
          <a href="/privacy" className="underline hover:text-blue-600">
            Privacy Policy
          </a>{' '}
          and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;