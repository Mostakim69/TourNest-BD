import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Link } from "react-router";
const AllBookings = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data.data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }) => {
      await axiosSecure.patch(`/bookings/${id}`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["all-bookings"]);
      Swal.fire("Success", "Booking status updated!", "success");
    },
    onError: () => {
      Swal.fire("Error", "Failed to update booking", "error");
    },
  });

  const handleUpdateStatus = (id, status) => {
    Swal.fire({
      title: `Confirm ${status}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      background: "#111",
      color: "#eee",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatus.mutate({ id, status });
      }
    });
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center glow-text">
        📦 All Bookings
      </h2>

      {isLoading ? (
        <div className="text-center text-lg animate-pulse">
          Loading bookings...
        </div>
      ) : bookings.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">No bookings found</div>
      ) : (
        <div className="overflow-x-auto shadow-lg glow-border rounded-xl">
          <table className="table table-zebra table-sm w-full text-sm">
            <thead className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
              <tr>
                <th>#</th>
                <th>Tourist</th>
                <th>Package</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody data-aos="fade-up-left">
              {bookings.map((booking, index) => (
                <motion.tr
                  key={booking._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="hover:bg-[#1f2937]/60 transition duration-200"
                >
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <img
                        src={booking.touristPhoto}
                        alt={booking.touristName}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <span>{booking.touristName}</span>
                    </div>
                  </td>
                  <td>{booking.packageName}</td>
                  <td>{new Date(booking.tourDate).toLocaleDateString()}</td>
                  <td className="text-green-400">${booking.price}</td>
                  <td>
                    <span
                      className={`badge badge-sm ${
                        booking.status === "completed"
                          ? "badge-success"
                          : booking.status === "canceled"
                            ? "badge-error"
                            : "badge-warning"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge badge-outline ${
                        booking.paymentStatus === "paid"
                          ? "text-green-300"
                          : "text-red-400"
                      }`}
                    >
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="flex gap-2">
                    <Link
                      className="badge badge-sm badge-info"
                      to={`/dashboard/bookings/${booking._id}`}
                    >
                      Details
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBookings;
