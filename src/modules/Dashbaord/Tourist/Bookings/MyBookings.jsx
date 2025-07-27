import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router"; // react-router-dom, NOT react-router
import BookingCard from "./BookingCard";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useUserRole from "../../../../hooks/useUserRole";

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { userData } = useUserRole();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["myBookings", userData?._id],
    enabled: !!userData?._id,
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/tourist/${userData._id}`);
      return res.data?.data || [];
    },
  });

  if (isLoading) {
    return (
      <div className="text-center text-xl py-20 text-indigo-400 animate-pulse">
        Loading your bookings...
      </div>
    );
  }

  if (!bookings.length) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h2 className="text-2xl font-bold mb-4">No bookings found</h2>
        <Link to="/" className="btn btn-primary glow-border px-6 py-2">
          Browse Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-[#d5dcf0] text-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400 tracking-wide">
        📚 My Bookings
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
