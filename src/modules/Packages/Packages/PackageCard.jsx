import { Link } from "react-router";

const PackageCard = ({ pkg }) => {
  return (
    <div
      className="card bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white border border-primary shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] w-full max-w-sm mx-auto"
      data-aos="fade-up-left"
    >
      <figure>
        <img
          src={pkg.gallery?.[0]}
          alt={pkg.title}
          className="h-32 sm:h-40 md:h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body p-4 sm:p-5 flex flex-col justify-between h-56">
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold truncate">{pkg.title}</h3>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm my-2 sm:my-3">
            <span className="badge badge-accent">{pkg.tripType}</span>
            <span className="badge badge-secondary">{pkg.days} Days</span>
            <span className="badge badge-outline text-white border-white">
              {pkg.location}
            </span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-bold text-secondary mt-2">
            ৳ {pkg.price.toLocaleString()}
          </div>
        </div>
        <div className="card-actions self-end mt-2">
          <Link
            to={`/packages/${pkg._id}`}
            className="btn btn-primary btn-xs sm:btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;