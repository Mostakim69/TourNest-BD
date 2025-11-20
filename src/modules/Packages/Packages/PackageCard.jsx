import { Link } from "react-router";

const PackageCard = ({ pkg }) => {
  return (
    <div
      className="card bg-gradient-to-br from-[#1a1c2b] to-[#11131f] shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] w-full max-w-sm mx-auto"
      data-aos="fade-up-left"
    >
      <figure className="overflow-hidden relative">
        <img
          src={pkg.gallery?.[0]}
          alt={pkg.title}
          className="h-36 sm:h-44 md:h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      </figure>

      <div className="card-body flex flex-col justify-between p-3 sm:p-4 min-h-[240px]">
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white line-clamp-2">
            {pkg.title}
          </h3>

          <div className="flex flex-wrap gap-2 text-xs sm:text-sm my-1.5 sm:my-2">
            <span
              className="badge bg-blue-500 text-white px-2 py-1 rounded"
              aria-label={`Trip type: ${pkg.tripType}`}
            >
              {pkg.tripType}
            </span>
            <span className="badge bg-blue-400 text-white px-2 py-1 rounded">
              {pkg.days} Days
            </span>
            <span
              className="badge border border-white text-white px-2 py-1 rounded"
              aria-label={`Location: ${pkg.location}`}
            >
              {pkg.location}
            </span>
          </div>

          <div className="text-lg sm:text-base md:text-lg font-extrabold text-blue-400 mt-1.5">
            ৳ {pkg.price.toLocaleString()}
          </div>
        </div>

        <div className="card-actions self-end mt-2">
          <Link
            to={`/packages/${pkg._id}`}
            className="btn btn-primary rounded-full px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base w-full sm:w-auto text-center transition-colors duration-300 bg-blue-500 hover:bg-blue-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
