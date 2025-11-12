import ProtectedRoute from "../../router/ProtectedRoute";
import AddStories from "./AddStories/AddStories";
import AddPackage from "./Admin/AddPackage/AddPackage";
import AllBookings from "./Admin/Bookings/AllBookings";
import BookingDetails from "./Admin/Bookings/BookingDetails";
import ManageCandidate from "./Admin/ManageCandidate/ManageCandidate";
import ManageUsers from "./Admin/ManageUsers/ManageUsers";
import AllPayments from "./Admin/Payments/AllPayments";
import DashboardLayout from "./DashboardLayout";
import ManageProfile from "./ManageProfile/ManageProfile";
import ManageStories from "./ManageStories/ManageStories";
import Overview from "./Overview/Overview";
import AssignedTour from "./TourGuides/AssignedTour/AssignedTour";
import MyBookings from "./Tourist/Bookings/MyBookings";
import JoinTourGuide from "./Tourist/JoinTourGuide/JoinTourGuide";
import PaymentBooking from "./Tourist/PaymentBooking/PaymentBooking";

const dashbourdRoutes = {
  path: "/dashboard",
  element: (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  ),
  children: [
    // tourist routes
    {
      index: true,
      element: <ManageProfile />,
    },
    {
      path: "my-bookings",
      element: <MyBookings />,
    },
    {
      path: "payment-booking/:bookingId",
      element: <PaymentBooking />,
    },

    {
      path: "tourist/join-tour-guide",
      element: <JoinTourGuide />,
    },
    // common routes
    {
      path: "manage-profile",
      element: <ManageProfile />,
    },
    {
      path: "overview",
      element: <Overview />,
    },

    {
      path: "manage-stories",

      element: <ManageStories />,
    },
    {
      path: "add-stories",
      element: <AddStories />,
    },
    // guide routes
    {
      path: "guide/my-assigned-tours",
      element: <AssignedTour />,
    },

    // admin routes
    {
      path: "admin/add-package",
      element: <AddPackage />,
    },
    {
      path: "admin/candidates",
      element: <ManageCandidate />,
    },
    {
      path: "admin/manage-users",
      element: <ManageUsers />,
    },
    {
      path: "admin/bookings",
      element: <AllBookings />,
    },
    {
      path: "admin/payments",
      element: <AllPayments />,
    },
    {
      path: "bookings/:bookingId",
      element: <BookingDetails />,
    },
  ],
};

export default dashbourdRoutes;
