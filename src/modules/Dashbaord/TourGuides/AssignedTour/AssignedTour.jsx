import { useState, useEffect } from "react";
import useSecureQuery from "../../../../hooks/useSecureQuery";
import useSecureUpdate from "../../../../hooks/useSecureUpdate";
import AssignedTourCard from "./AssignedTourCard";
import { darkSwal } from "../../../../hooks/usePostData";
import Spinner from "../../../shared/Layout/Spinner";
import useUserRole from "../../../../hooks/useUserRole";

const AssignedTour = () => {
  const { userData } = useUserRole();
  const { data, isLoading, error, refetch } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"],
    `/bookings/guide/${userData?._id}`,
  );

  // console.log(data, "aasigned tour book AssignedTour.jsx", 10);
  // 🧠 Keep track of which booking to update
  const [bookingIdToUpdate, setBookingIdToUpdate] = useState(null);
  const [statusToUpdate, setStatusToUpdate] = useState(null);

  // ✅ Always keep hook at top level
  const {
    mutateAsync: patchBooking,
    isPending,
    isSuccess,
    isError,
    error: patchError,
  } = useSecureUpdate(
    bookingIdToUpdate ? `/bookings/${bookingIdToUpdate}` : "/bookings/empty",
  );

  // ✅ Watch for update trigger
  useEffect(() => {
    const update = async () => {
      if (!bookingIdToUpdate || !statusToUpdate) return;
      try {
        const res = await patchBooking({ status: statusToUpdate });
        if (res?.success) {
          darkSwal.fire("Success", `Booking ${statusToUpdate}`, "success");
          refetch();
        }
      } catch (err) {
        darkSwal.fire("Error", patchError?.message || "Failed", "error");
      } finally {
        setBookingIdToUpdate(null);
        setStatusToUpdate(null);
      }
    };
    update();
  }, [bookingIdToUpdate, statusToUpdate]);

  // ✅ Called from card/button
  const handleAction = (bookingId, status) => {
    setBookingIdToUpdate(bookingId);
    setStatusToUpdate(status);
  };

  if (isLoading) return <Spinner />;

  if (error)
    return <p className="text-center text-red-400">Failed to load bookings.</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-violet-700 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
        Assigned Tours
      </h1>
      {data?.data?.length === 0 && (
        <div className="text-center text-gray-400 py-20">
          <h2 className="text-2xl"> You haven't assigned any tours yet.</h2>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {data?.data.length > 0 &&
          data?.data?.map((booking) => (
            <div
              key={booking._id}
              className="rounded-xl shadow-md border border-gray-700 bg-base-200 bg-opacity-80 p-4 backdrop-blur-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <AssignedTourCard
                booking={booking}
                handleAction={handleAction}
                isPending={isPending && booking._id === bookingIdToUpdate}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AssignedTour;
