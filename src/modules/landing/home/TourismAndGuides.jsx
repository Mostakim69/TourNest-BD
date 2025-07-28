// src/modules/landing/home/TourismAndGuides.jsx

import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../shared/Layout/Spinner";
import PackageCard from "../../Packages/Packages/PackageCard";
import { Link } from "react-router";

const TourismAndGuides = () => {
  const { data: packages = [], loading } = useFetchData("packages/random");

  console.log(packages, "TourismAndGuides.jsx", 7);
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 bg-clip-text drop-shadow-xl animate-pulse">
        Our Featured Packages
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <Spinner />
        ) : (
          packages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        )}
      </div>
      <div className="flex-container mt-8">
        <Link
          className="btn btn-soft btn-info rounded-full mt-3 "
          to="/all-trips"
        >
          View All Packages
        </Link>
      </div>

      <div className="divider my-6"></div>
    </section>
  );
};

export default TourismAndGuides;
