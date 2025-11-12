import { format } from "date-fns";
import { motion } from "framer-motion";
import { Link } from "react-router";

const PaymentCard = ({ payment, index }) => {
  return (
    <motion.div
      key={payment._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/90 
                 p-5 rounded-2xl border border-slate-700 shadow-lg 
                 hover:shadow-glow pulse-glow hover:scale-[1.02] transition-all duration-300"
    >
      {/* glowing aura effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-indigo-500/20 blur-xl rounded-2xl opacity-30 pointer-events-none animate-tilt" />

      <div
        className="relative z-10 space-y-2 text-slate-100"
        data-aos="fade-up-right"
      >
        <p>
          <span className="font-medium text-slate-400">Email:</span>{" "}
          <span className="text-white glow-text">{payment.email}</span>
        </p>
        <p>
          <span className="font-medium text-slate-400">Transaction ID:</span>{" "}
          <span className="text-pink-400 glow-text">
            {payment.transactionId}
          </span>
        </p>
        <p>
          <span className="font-medium text-slate-400">Booking ID:</span>{" "}
          <span className="text-blue-400 glow-text">{payment.bookingId}</span>
        </p>
        <p>
          <span className="font-medium text-slate-400">Amount:</span>{" "}
          <span className="text-green-400 font-semibold glow-text">
            ${payment.amount.toFixed(2)}
          </span>
        </p>
        <p>
          <span className="font-medium text-slate-400">Date:</span>{" "}
          <span className="text-slate-200 glow-text">
            {format(new Date(payment.date), "PPPpp")}
          </span>
        </p>
        <Link
          className="btn btn-outline btn-info rounded-full mt-2"
          to={`/dashboard/bookings/${payment.bookingId}`}
        >
          See Booking
        </Link>
      </div>
    </motion.div>
  );
};

export default PaymentCard;
