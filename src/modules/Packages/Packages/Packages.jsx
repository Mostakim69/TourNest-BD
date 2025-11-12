import { Link, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../shared/Layout/Spinner";
import PackageCard from "./PackageCard";

const Packages = ({ apiEndpoint }) => {
  const { data: packages = [], loading } = useFetchData(apiEndpoint);
  const location = useLocation();
  const isAllTripPage = location.pathname.toLowerCase().includes("all-trips");
  const [sortOrder, setSortOrder] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTripType, setSelectedTripType] = useState("all");

  // Get unique trip types for filter dropdown
  const tripTypes = useMemo(() => {
    const types = new Set(packages.map((pkg) => pkg.tripType));
    return ["all", ...types];
  }, [packages]);

  // Filter packages based on search query and trip type
  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = [pkg.title, pkg.tripType, pkg.location].some((field) =>
      field?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesTripType =
      selectedTripType === "all" || pkg.tripType === selectedTripType;
    return matchesSearch && matchesTripType;
  });

  // Sort filtered packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortOrder === "priceAsc") {
      return a.price - b.price;
    } else if (sortOrder === "priceDesc") {
      return b.price - a.price;
    }
    return 0; // Default order
  });

  return (
    <section className="px-4 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 bg-clip-text drop-shadow-xl glow-text animate-pulse">
        Our Featured Packages
      </h2>
      <p className="text-base sm:text-lg text-center mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">
        Our Featured Packages offer handpicked travel experiences across Bangladesh's most stunning destinations. Each package is crafted for comfort, adventure, and unforgettable memories.
      </p>

      {/* Search, Sort, and Filter Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by title, type, or location..."
          className="input input-bordered w-full max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex gap-4">
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedTripType}
            onChange={(e) => setSelectedTripType(e.target.value)}
          >
            {tripTypes.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All Trip Types" : type}
              </option>
            ))}
          </select>
          <select
            className="select select-bordered w-full max-w-xs"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default Sort</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {loading ? (
          <div className="col-span-full flex justify-center items-center">
            <Spinner />
          </div>
        ) : sortedPackages.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No packages found matching your criteria.
          </div>
        ) : (
          sortedPackages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        )}
      </div>

      {isAllTripPage || (
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
          <Link
            className="btn btn-soft btn-info rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
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