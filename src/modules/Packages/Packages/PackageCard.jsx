import { Link } from "react-router";

const PackageCard = ({ pkg }) => {
  return (
    <div
      key={pkg._id}
      className="card bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white border border-primary shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] w-72"
      data-aos="fade-up-left"
    >
      <figure>
        <img
          src={pkg.gallery?.[0]}
          alt={pkg.title}
          className="h-32 w-full object-cover"
        />
      </figure>
      <div className="card-body p-4 flex flex-col justify-between h-60">
        <div>
          <h3 className="text-lg font-semibold truncate">{pkg.title}</h3>
          <div className="flex flex-wrap gap-2 text-xs my-2">
            <span className="badge badge-accent">{pkg.tripType}</span>
            <span className="badge badge-secondary">{pkg.days} Days</span>
            <span className="badge badge-outline text-white border-white">
              {pkg.location}
            </span>
          </div>
          <div className="text-base font-bold text-secondary mt-4">
            ৳ {pkg.price.toLocaleString()}
          </div>
        </div>
        <div className="card-actions self-end">
          <Link to={`/packages/${pkg._id}`} className="btn btn-primary btn-xs">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;