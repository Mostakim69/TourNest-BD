// src/pages/BookingDetails.jsx
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Spinner from "../../../shared/Layout/Spinner";

const BookingDetails = () => {
  const { bookingId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["booking-details", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${bookingId}`);
      return res.data?.data;
    },
    enabled: !!bookingId,
  });

  // console.log(bookingId, "bookingId BookingDetails.jsx", 14);
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-white animate-pulse">
        Loading booking details...
        <Spinner />
      </div>
    );
  }

  const {
    packageId,
    touristId,
    guideId,
    price,
    status,
    paymentStatus,
    tourDate,
    createdAt,
  } = data || {};

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-10 text-white space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2
        className="text-3xl font-bold text-center glow-text uppercase"
        data-aos="zoom-in"
      >
        Booking Details
      </h2>

      {/* Package Details */}
      <div
        className="bg-[#101010] rounded-2xl p-6 border glow-border space-y-3"
        data-aos="fade-up-right"
      >
        <h3 className="text-xl font-semibold">Package Information</h3>
        <p>
          <span className="font-medium">Title:</span> {packageId?.title}
        </p>
        <p>
          <span className="font-medium">Location:</span> {packageId?.location}
        </p>
        <p>
          <span className="font-medium">Price:</span> ৳{packageId?.price}
        </p>
        <p>
          <span className="font-medium">Days:</span> {packageId?.days}
        </p>
        <div>
          <span className="font-medium">Gallery:</span>
          <div className="flex gap-2 mt-2">
            {packageId?.gallery?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`gallery-${idx}`}
                className="w-20 h-20 object-cover rounded-lg border border-white/20 hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tourist Info */}
      <div
        className="bg-[#101010] rounded-2xl p-6 border glow-border space-y-3"
        data-aos="fade-up-left"
      >
        <h3 className="text-xl font-semibold">Tourist Info</h3>
        <div className="flex items-center gap-4">
          <img
            src={touristId?.photoURL}
            className="w-16 h-16 rounded-full border"
            alt="Tourist"
          />
          <div>
            <p>
              <span className="font-medium">Name:</span> {touristId?.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {touristId?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Guide Info */}
      <div
        className="bg-[#101010] rounded-2xl p-6 border glow-border space-y-3"
        data-aos="fade-up-right"
      >
        <h3 className="text-xl font-semibold">Guide Info</h3>
        <div className="flex items-center gap-4">
          <img
            src={guideId?.photoURL}
            className="w-16 h-16 rounded-full border"
            alt="Guide"
          />
          <div>
            <p>
              <span className="font-medium">Name:</span> {guideId?.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {guideId?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Booking Meta Info */}
      <div
        className="bg-[#101010] rounded-2xl p-6 border glow-border space-y-3"
        data-aos="fade-up-left"
      >
        <h3 className="text-xl font-semibold">Booking Summary</h3>
        <p>
          <span className="font-medium">Booking ID:</span> {data?._id}
        </p>
        <p>
          <span className="font-medium">Tour Date:</span>{" "}
          {new Date(tourDate).toLocaleDateString()}
        </p>
        <p>
          <span className="font-medium">Created At:</span>{" "}
          {new Date(createdAt).toLocaleString()}
        </p>
        <p>
          <span className="font-medium">Status:</span>
          <span
            className={`ml-2 badge ${status === "accepted" ? "badge-success" : "badge-warning"}`}
          >
            {status}
          </span>
        </p>
        <p>
          <span className="font-medium">Payment:</span>
          <span
            className={`ml-2 badge ${paymentStatus === "paid" ? "badge-accent" : "badge-secondary"}`}
          >
            {paymentStatus}
          </span>
        </p>
        <p>
          <span className="font-medium">Price Paid:</span> ৳{price}
        </p>
      </div>
    </motion.div>
  );
};

export default BookingDetails;
