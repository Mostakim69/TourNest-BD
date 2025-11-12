import { motion } from "framer-motion";
import { Link } from "react-router";

const AssignedTourCard = ({ booking, handleAction }) => {
  const {
    touristName,
    touristEmail,
    touristPhoto,
    packageName,
    price,
    tourDate,
    status,
    paymentStatus,
  } = booking;

  const formattedDate = new Date(tourDate).toLocaleDateString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      data-aos="fade-up"
      className="bg-gradient-to-br from-indigo-950 to-purple-900 bg-opacity-80 rounded-2xl p-6 shadow-xl border border-indigo-700 
                 transition-all duration-300 hover:shadow-purple-600 min-h-[330px] flex flex-col justify-between"
    >
      {/* Tourist Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={touristPhoto}
          alt={touristName}
          className="w-16 h-16 rounded-full ring-2 ring-indigo-500 shadow-md"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">{touristName}</h2>
          <p className="text-sm text-gray-400">{touristEmail}</p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="text-sm space-y-2 text-gray-300">
        <p>
          <span className="text-purple-300 font-medium">📦 Package:</span>{" "}
          {packageName}
        </p>
        <p>
          <span className="text-purple-300 font-medium">💰 Price:</span> ৳
          {price}
        </p>
        <p>
          <span className="text-purple-300 font-medium">📅 Tour Date:</span>{" "}
          {formattedDate}
        </p>
      </div>

      {/* Status Badges */}
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`badge border-none ${
            status === "accepted"
              ? "bg-green-600 text-white"
              : status === "rejected"
                ? "bg-red-700 text-white"
                : "bg-gray-800 text-purple-300"
          }`}
        >
          {status}
        </span>
        <span
          className={`badge border-none ${
            paymentStatus === "paid"
              ? "bg-blue-600 text-white"
              : "bg-yellow-700 text-white"
          }`}
        >
          {paymentStatus}
        </span>
      </div>

      {/* Action Buttons or Placeholder */}
      <div className="mt-6">
        {status === "in-review" ? (
          <div className="flex justify-end gap-4 *:rounded-full">
            <button
              onClick={() => handleAction(booking._id, "accepted")}
              className="btn btn-sm bg-green-600 text-white hover:shadow-green-400 hover:brightness-110 transition duration-200"
            >
              Accept
            </button>
            <button
              onClick={() => handleAction(booking._id, "rejected")}
              className="btn btn-sm bg-red-700 text-white hover:shadow-red-400 hover:brightness-110 transition duration-200"
            >
              Reject
            </button>
          </div>
        ) : (
          // Reserve space to maintain height
          <div className="h-10"></div>
        )}
        <Link
          className="btn btn-sm btn-active btn-primary text-white hover:bg-white hover:text-black transition duration-200 rounded-full"
          to={`/dashboard/bookings/${booking._id}`}
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default AssignedTourCard;
