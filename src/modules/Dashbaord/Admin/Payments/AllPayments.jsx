import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PaymentCard from "./PaymentCard";

const AllPayments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data?.data || [];
    },
  });

  if (isLoading)
    return (
      <div className="text-center py-10 text-white">Loading payments...</div>
    );

  return (
    <div className="p-4 md:p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 glow-text">All Payments</h2>
      <div className="grid gap-4 md:grid-cols-2 ">
        {payments.length > 0 ? (
          payments.map((payment, index) => (
            <PaymentCard payment={payment} key={payment._id} index={index} />
          ))
        ) : (
          <h2 className="text-xl sm:text-3xl text-gray-400">
            No payments found.
          </h2>
        )}
      </div>
    </div>
  );
};

export default AllPayments;
