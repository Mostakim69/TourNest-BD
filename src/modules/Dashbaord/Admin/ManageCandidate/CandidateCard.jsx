const CandidateCard = ({
  candidate,
  processedRequests,
  acceptMutation,
  rejectMutation,
}) => {
  const status = processedRequests[candidate._id] || candidate.status;
  const isDisabled = status === "accepted" || status === "rejected";

  return (
    <div
      key={candidate._id}
      className="bg-[#1e293b] rounded-xl p-4 border border-indigo-600 jhilimili-glow"
      data-aos="fade-up-right"
    >
      <div className="flex justify-between sm:items-center mb-2 max-sm:flex-col">
        <div>
          <h2 className="text-xl max-sm:text-sm font-semibold text-cyan-300 text-wrap">
            {candidate.userId.name} ({candidate.userId.email})
          </h2>
          <p className="text-sm text-indigo-400">{candidate.title}</p>
        </div>
        <span
          className={`badge ${
            status === "accepted"
              ? "badge-success"
              : status === "rejected"
                ? "badge-error"
                : "badge-warning"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="mb-1 text-slate-300">
        <span className="font-medium">Reason:</span> {candidate.reason}
      </p>
      <p className="mb-3 text-sky-400 underline">
        <a href={candidate.cvLink} target="_blank" rel="noreferrer">
          View CV
        </a>
      </p>

      <div className="flex gap-4">
        <button
          disabled={isDisabled}
          onClick={() => acceptMutation.mutate({ requestId: candidate._id })}
          className={`btn btn-sm glow-effect transition ${
            status === "accepted" ? "btn-success" : "btn-outline btn-success"
          }`}
        >
          {status === "accepted" ? "✅ Accepted" : "✅ Accept"}
        </button>

        <button
          disabled={isDisabled}
          onClick={() => rejectMutation.mutate(candidate._id)}
          className={`btn btn-sm glow-effect transition ${
            status === "rejected" ? "btn-error" : "btn-outline btn-error"
          }`}
        >
          {status === "rejected" ? "❌ Rejected" : "❌ Reject"}
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
