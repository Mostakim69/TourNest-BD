import { Link, useLocation } from "react-router";
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../shared/Layout/Spinner";
import PackageCard from "./PackageCard";

const Packages = ({ apiEndpoint }) => {
  const { data: packages = [], loading } = useFetchData(apiEndpoint);

  const location = useLocation();
  const isAllTripPage = location.pathname.toLowerCase().includes("all-trips");

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse">
        Our Featured Packages
      </h2>
      <p className="text-lg justify-center items-center text-center mb-8 ">Our Featured Packages offer handpicked travel experiences across Bangladesh's most stunning <br />destinations. Each package is crafted for comfort, adventure, and unforgettable memories.</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <Spinner />
        ) : (
          packages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        )}
      </div>

      {isAllTripPage || (
        <div className="flex-container mt-8">
          <Link
            className="btn btn-soft btn-info rounded-full mt-3 "
            to="/all-trips"
          >
            View All Packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
