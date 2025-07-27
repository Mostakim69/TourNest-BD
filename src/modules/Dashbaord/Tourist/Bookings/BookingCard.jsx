import { FaCheckCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { Link } from "react-router";

const BookingCard = ({ booking }) => {
  return (
    <div
      key={booking._id}
      className="relative bg-[#d5dcf0] p-6 rounded-2xl border border-indigo-700 shadow-[0_0_25px_#6366f1aa] glow-border pulse-glow transition-transform duration-300 hover:scale-[1.04] cursor-default"
      data-aos="fade-right"
    >
      {/* Status Badge */}
      <div
        className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full select-none ${
          booking.status === "pending"
            ? "bg-yellow-700 text-yellow-300"
            : "bg-green-700 text-green-300"
        }`}
      >
        {booking.status === "pending" ? (
          <>
            <MdPending className="inline-block mr-1 text-yellow-300" />
            Pending
          </>
        ) : (
          <>
            <FaCheckCircle className="inline-block mr-1 text-green-300" />
            Confirmed
          </>
        )}
      </div>

      <h3 className="text-2xl font-semibold mb-3 text-indigo-300 glow-border">
        {booking.packageName}
      </h3>

      <p className="text-gray-400 mb-1">
        <span className="font-medium text-indigo-400">Date:</span>{" "}
        {new Date(booking.tourDate).toLocaleDateString()}
      </p>
      <p className="text-gray-400 mb-1">
        <span className="font-medium text-indigo-400">Guide:</span>{" "}
        {booking.guideName}
      </p>
      <p className="text-gray-400 mb-4">
        <span className="font-medium text-indigo-400">Price:</span>{" "}
        <span className="text-green-400">${booking.price}</span>
      </p>

      <div className="flex items-center gap-3">
        <span
          className={`text-sm px-3 py-1 rounded-full border font-semibold select-none ${
            booking.paymentStatus === "paid"
              ? "bg-green-900 text-green-400 border-green-500"
              : "bg-red-900 text-red-400 border-red-500"
          }`}
        >
          Payment: {booking.paymentStatus === "paid" ? "Paid" : "Unpaid"}
        </span>
      </div>

      <div className="mt-6 text-right space-x-2">
        <Link
          to={`/dashboard/bookings/${booking._id}`}
          className="btn btn-sm bg-purple-700 hover:bg-purple-500 text-white rounded-md glow-border px-5 py-2 font-semibold transition-shadow shadow-indigo-600"
        >
          Details
        </Link>
        {booking.status === "pending" && (
          <Link
            to={`/dashboard/payment-booking/${booking._id}`}
            className="btn btn-sm bg-indigo-700 hover:bg-indigo-500 text-white rounded-md glow-border px-5 py-2 font-semibold transition-shadow shadow-indigo-600"
          >
            Confirm Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
