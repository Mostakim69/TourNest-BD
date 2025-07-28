import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useState } from "react";
import CandidateCard from "./CandidateCard";

const ManageCandidate = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [processedRequests, setProcessedRequests] = useState({});

  // Fetch candidates
  const { data: candidateData = [], isLoading } = useQuery({
    queryKey: ["tour-guide-requests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tour-guide-requests");
      return res.data?.data || [];
    },
  });

  // Accept mutation
  const acceptMutation = useMutation({
    mutationFn: async ({ requestId }) => {
      await axiosSecure.patch(`tour-guide-requests/${requestId}`, {
        status: "accepted",
      });
    },
    onSuccess: (_, { requestId }) => {
      setProcessedRequests((prev) => ({
        ...prev,
        [requestId]: "accepted",
      }));
      queryClient.invalidateQueries(["tour-guide-requests"]);
      Swal.fire({
        icon: "success",
        title: "Accepted!",
        text: "User is now a tour guide.",
        toast: true,
        timer: 2000,
        background: "#0f172a",
        color: "#fff",
        showConfirmButton: false,
      });
    },
  });

  // Reject mutation
  const rejectMutation = useMutation({
    mutationFn: async (requestId) => {
      await axiosSecure.delete(`/tour-guide-requests/${requestId}`);
    },
    onSuccess: (_, requestId) => {
      setProcessedRequests((prev) => ({
        ...prev,
        [requestId]: "rejected",
      }));
      queryClient.invalidateQueries(["tour-guide-requests"]);
      Swal.fire({
        icon: "info",
        title: "Rejected",
        text: "Application removed.",
        toast: true,
        timer: 2000,
        background: "#0f172a",
        color: "#fff",
        showConfirmButton: false,
      });
    },
  });

  return (
    <motion.div
      className="max-w-5xl mx-auto mt-10 p-6 text-white rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="sm:text-3xl text-xl font-bold text-center mb-8 glow-text pulse-glow">
        Manage Tour Guide Candidates
      </h1>

      {isLoading ? (
        <p className="text-center text-indigo-300">Loading candidates...</p>
      ) : candidateData.length === 0 ? (
        <p className="text-center text-gray-400">No candidates found.</p>
      ) : (
        <div className="space-y-6">
          {candidateData.map((candidate) => {
            return (
              <CandidateCard
                key={candidate._id}
                candidate={candidate}
                processedRequests={processedRequests}
                acceptMutation={acceptMutation}
                rejectMutation={rejectMutation}
              />
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default ManageCandidate;
