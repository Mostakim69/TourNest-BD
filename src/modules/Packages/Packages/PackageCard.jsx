import { Link } from "react-router";

const PackageCard = ({ pkg }) => {
  return (
    <div
      key={pkg._id}
      className="card bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white border border-primary shadow-2xl transform transition-all duration-300 hover:scale-103 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] pulse-glow"
      data-aos="fade-up-left"
    >
      <figure>
        <img
          src={pkg.gallery?.[0]}
          alt={pkg.title}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-bold">{pkg.title}</h3>
        <div className="flex flex-wrap gap-3 text-sm my-2">
          <span className="badge badge-accent">{pkg.tripType}</span>
          <span className="badge badge-secondary">{pkg.days} Days</span>
          <span className="badge badge-outline text-white border-white">
            {pkg.location}
          </span>
        </div>
        <div className="text-lg font-semibold text-secondary">
          ৳ {pkg.price.toLocaleString()}
        </div>
        <div className="card-actions justify-end mt-2">
          <Link to={`/packages/${pkg._id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
