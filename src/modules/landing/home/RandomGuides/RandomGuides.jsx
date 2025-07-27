import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { axiosInstance } from "../../../../hooks/useAxiosSecure";

const fetchRandomGuides = async () => {
  const res = await axiosInstance.get("tour-guide-requests/random-accepted");
  return res.data?.data || [];
};

export default function RandomGuides() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["randomAcceptedGuides"],
    queryFn: fetchRandomGuides,
  });

  if (isLoading) {
    return (
      <div className="text-center text-primary text-xl mt-10">
        Loading tour guides...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-error text-xl mt-10">
        Failed to load guides.
      </div>
    );
  }

  return (
    <section className="py-16 bg-base-00">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-glow">
          🌟 Meet Our Verified Tour Guides
        </h2>

        {data.length === 0 ? (
          <div className="text-center text-gray-300 text-xl">
            No tour guides available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((guide) => (
              <div
                key={guide._id}
                className="group relative bg-gradient-to-br from-[#1c1c1e] to-[#2a2a2d] border border-[#2f2f30] rounded-xl p-6 shadow-lg overflow-hidden
                hover:shadow-glow transition duration-300"
                data-aos="fade-up-right"
              >
                <div className="absolute -top-5 -left-5 w-40 h-40 bg-primary opacity-10 rounded-full blur-2xl animate-pulse pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                    {guide?.user?.name || "Unknown Guide"}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {guide?.user?.email || "No email provided"}
                  </p>

                  <span className="badge badge-accent badge-outline mb-4">
                    Accepted
                  </span>

                  <div className="mt-4">
                    <Link
                      to={`/guides/${guide?.user?._id || "#"}`}
                      className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-black transition duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}