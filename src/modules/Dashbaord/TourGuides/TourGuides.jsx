import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { axiosInstance } from "../../../hooks/useAxiosSecure";
import Spinner from "../../shared/Layout/Spinner.jsx";

const fetchAllGuides = async () => {
  const res = await axiosInstance.get(
    "tour-guide-requests/random-accepted?limit=all",
  );
  return res.data?.data || [];
};

export default function TourGuides() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allAcceptedGuides"],
    queryFn: fetchAllGuides,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <section className="py-16 bg-base-100 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-glow">
          🧭 Explore All Our Tour Guides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((guide) => (
            <div
              key={guide._id}
              className="group relative bg-gradient-to-br from-[#141416] to-[#1e1e21] border border-[#333] rounded-xl p-6 shadow-lg overflow-hidden
              hover:shadow-glow transition duration-300"
            >
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl animate-pulse pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-accent mb-2 group-hover:scale-105 transition-transform duration-200">
                  {guide?.user?.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  {guide?.user?.email}
                </p>
                <span className="badge badge-success badge-outline mb-4">
                  Accepted
                </span>

                <div className="mt-3">
                  <Link
                    to={`/guides/${guide._id}`}
                    className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-black"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data.length === 0 && (
          <div className="text-center text-warning mt-12">
            No tour guides found.
          </div>
        )}
      </div>
    </section>
  );
}
