import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../../hooks/usePostData";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { bookingId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { isPending, data: bookingInfo = {} } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  if (isPending) {
    return (
      <div className="text-center text-indigo-400 py-20 animate-pulse">
        Loading Booking Info...
      </div>
    );
  }

  const amount = bookingInfo.price;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setError("");

    const res = await axiosSecure.post("/payments/create-payment-intent", {
      amountInCents,
      bookingId,
    });

    const clientSecret = res?.data?.data?.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user.displayName,
          email: user.email,
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      setError("");
      if (result.paymentIntent.status === "succeeded") {
        const transactionId = result.paymentIntent.id;

        const paymentData = {
          bookingId,
          amount,
          email: user?.email,
          transactionId,
          paymentMethod: result.paymentIntent.payment_method_types,
        };

        const paymentRes = await axiosSecure.post("/payments", paymentData);

        if (paymentRes?.data?.data?._id) {
          await darkSwal.fire({
            icon: "success",
            title: "Payment Successful!",
            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
            confirmButtonText: "Go to My Bookings",
          });

          await axiosSecure.patch(`bookings/${bookingId}`, {
            status: "in-review",
            paymentStatus: "paid",
            transactionId,
          });

          navigate("/dashboard/my-bookings");
        }
      }
    }
  };

  return (
    <div
      className="max-w-4xl mx-auto p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl border border-indigo-800"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-center text-indigo-400 mb-6"
        data-aos="zoom-in"
      >
        Complete Your Payment
      </h2>

      <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
        <div className="space-y-3 text-gray-300" data-aos="fade-right">
          <p>
            <span className="text-indigo-400 font-semibold">Package:</span>{" "}
            {bookingInfo.packageId?.title}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Location:</span>{" "}
            {bookingInfo.packageId?.location}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tour Date:</span>{" "}
            {new Date(bookingInfo.tourDate).toLocaleDateString()}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Days:</span>{" "}
            {bookingInfo.packageId?.days}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Trip Type:</span>{" "}
            {bookingInfo.packageId?.tripType}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Guide:</span>{" "}
            {bookingInfo.guideName}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tourist:</span>{" "}
            {bookingInfo.touristName}
          </p>
        </div>

        <div data-aos="fade-left">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-xl"
          >
            {/* <CardElement className="p-3 border border-indigo-700 rounded bg-sky-900 text-white" /> */}
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#e0e0ff", // Light text
                    backgroundColor: "#0f172a", // Night blue background
                    iconColor: "#7dd3fc", // Tailwind sky-400 for icon
                    "::placeholder": {
                      color: "#94a3b8", // slate-400
                    },
                  },
                  invalid: {
                    color: "#f87171", // Tailwind red-400
                    iconColor: "#f87171",
                  },
                },
              }}
              className="p-4 border border-indigo-700 rounded bg-[#0f172a]"
            />

            <button
              type="submit"
              disabled={!stripe}
              className="btn w-full py-3 rounded-md font-semibold text-lg transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-indigo-400 shadow-sm hover:scale-105"
              data-aos="zoom-in"
            >
              Pay ${amount}
            </button>
            {error && (
              <p className="text-red-500 mt-2 text-sm" data-aos="fade-in">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;