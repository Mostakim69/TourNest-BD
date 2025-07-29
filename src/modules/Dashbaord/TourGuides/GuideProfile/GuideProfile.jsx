import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../hooks/useAxiosSecure";

const fetchGuideDetails = async (id) => {
  // console.log(id, "id GuideProfile.jsx", 6);
  const res = await axiosInstance.get(`tour-guide-requests/user/${id}`);
  return res.data?.data;
};

export default function GuideProfile() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["guideDetails", id],
    queryFn: () => fetchGuideDetails(id),
  });

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-primary text-xl">
        Loading profile...
      </div>
    );
  }

  // console.log(data, "data GuideProfile.jsx", 15);
  if (isError || !data) {
    console.log(`error`, error);
    return (
      <div className="text-center mt-20 text-error text-xl">
        Failed to load guide profile.
      </div>
    );
  }

  const {
    title,
    reason,
    cvLink,
    status,
    createdAt,
    userId: { name, email, photoURL, role, last_loggedIn },
  } = data;

  return (
    <section className="min-h-[70vh] py-16 bg-[#0f0f11] text-white">
      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Background Glow */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl animate-pulse rounded-full pointer-events-none" />

        <div className="relative z-10 bg-gradient-to-br from-[#1a1a1c] to-[#0e0e11] border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-purple-500/30">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <img
              src={photoURL}
              className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow-inner shadow-indigo-600"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2 text-accent">{name}</h2>
              <p className="text-gray-400 text-sm mb-1">{email}</p>
              <p className="text-sm text-success capitalize">Role: {role}</p>
              <p className="text-sm mt-1">
                🕓 Last Login: {new Date(last_loggedIn).toLocaleString()}
              </p>
              <p className="text-sm mt-1">
                📅 Joined: {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="divider my-6"></div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">🪪 Title:</h3>
              <p className="text-gray-300">{title}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                🧭 Why a Tour Guide?
              </h3>
              <p className="text-gray-300">{reason}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                📎 CV / Resume:
              </h3>
              <a
                href={cvLink}
                target="_blank"
                rel="noreferrer"
                className="link link-accent hover:underline"
              >
                View CV
              </a>
            </div>
            <div>
              <span
                className={`badge px-4 py-2 text-sm ${status === "accepted" ? "badge-success" : "badge-warning"}`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
