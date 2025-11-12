// ✅ Role-based sidebar links
export const adminLinks = [
  { name: "📊 Overview", path: "/dashboard/overview" },
  { name: "👤 Manage Profile", path: "/dashboard/manage-profile" },
  { name: "🧑‍💼 Manage Users", path: "/dashboard/admin/manage-users" },
  { name: "➕ Add Package", path: "/dashboard/admin/add-package" },
  { name: "📝 Manage Candidates", path: "/dashboard/admin/candidates" },
  { name: "📦 All Bookings", path: "/dashboard/admin/bookings" },
  { name: "💳 Payments", path: "/dashboard/admin/payments" },
];

export const guideLinks = [
  { name: "📊 Overview", path: "/dashboard/overview" },
  { name: "👤 Manage Profile", path: "/dashboard/manage-profile" },
  { name: "🗺️ My Assigned Tours", path: "/dashboard/guide/my-assigned-tours" },
  {
    name: "✍️ Add Stories",
    path: "/dashboard/add-stories",
  },
  { name: "📚 Manage Stories", path: "/dashboard/manage-stories" },
];

export const touristLinks = [
  { name: "📊 Overview", path: "/dashboard/overview" },
  { name: "👤 Manage Profile", path: "/dashboard/manage-profile" },
  { name: "📦 My Bookings", path: "/dashboard/my-bookings" },
  {
    name: "✍️ Add Stories",
    path: "/dashboard/add-stories",
  },
  { name: "📚 Manage Stories", path: "/dashboard/manage-stories" },
  { name: "🧑‍✈️ Join as Tour Guide", path: "/dashboard/tourist/join-tour-guide" },
];
