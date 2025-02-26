import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/AccountPage/Login";
import SignUp from "../Pages/AccountPage/SignUp";
import Apartments from "../Pages/Apartments/Apartment";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import NormalUser from "../Dashboard/Agreements/Agreements";
import Announcements from "../Pages/Announcements/Announcements";
import Agreements from "../Dashboard/Agreements/Agreements";
import ManageMember from "../Dashboard/ManageMember/manageMember";
import MemberProfile from "../Pages/Member/MemberProfile";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import MemberRoute from "./MemberRoute";
import MakePayment from "../Pages/Member/MakePayment";
import PaymentHistory from "../Pages/Member/PaymentHistory";
import MemberAnnouncement from "../Pages/Member/MemberAnnouncement";
import MakeAnnouncement from "../Dashboard/MakeAnnouncement/MakeAnnouncement";
import AgreementRequest from "../Dashboard/AgreementRequest/AgreementRequest";
import ManageCoupons from "../Dashboard/ManageCoupons/ManageCoupons";
import ErrorPage from "../Layout/ErrorPage";
import AllpaymentsHistory from "../Dashboard/AllPaymentsHistory.jsx/AllpaymentsHistory";
import AdminRoute from "./AdminRoute";
import PayPayment from "../Pages/Member/PayPayment";
// import DashboardHome from "../Dashboard/DashboardHome ";
import Profile from "../Dashboard/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/apartments",
        element: (
          <PrivateRoute>
            <Apartments />
          </PrivateRoute>
        ),
      },  
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      // Normal User Route
      {
        path: "agreement",
        element: (
          <PrivateRoute>
            <Agreements />
          </PrivateRoute>
        ),
      },
      {
        path: "announcement",
        element: <Announcements />,
      },
      //Member user
      {
        path: "memberProfile",
        element: (
          <MemberRoute>
            <MemberProfile />
          </MemberRoute>
        ),
      },
      {
        path: "paypayment",
        element: <PayPayment />,
      },
      {
        path: "payment",
        element: (
          <MemberRoute>
            <MakePayment />
          </MemberRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <MemberRoute>
            <PaymentHistory />
          </MemberRoute>
        ),
      },
      {
        path: "memberAnnounce",
        element: (
          <MemberRoute>
            <MemberAnnouncement />
          </MemberRoute>
        ),
      },
      // Admin User
      {
        path: "manageMember",
        element: (
          <AdminRoute>
            <ManageMember />
          </AdminRoute>
        ),
      },
      {
        path: "dashboardHome",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "makeAnnouncement",
        element: (
          <AdminRoute>
            <MakeAnnouncement />
          </AdminRoute>
        ),
      },
      {
        path: "agreementRequest",
        element: <AgreementRequest />,
      },
      {
        path: "manageCoupons",

        element: <ManageCoupons />,
        loader: ({ params }) =>
          fetch(`http://localhost:5100/couponUpdate/${params.id}`),
      },
      {
        path: "allPaymentHistory",
        element: (
          <AdminRoute>
            <AllpaymentsHistory />
          </AdminRoute>
        ),
      },
      {
        path: "profileAll",
        element: (
          <AdminRoute>
            <Profile />
          </AdminRoute>
        ),
      },
    ],
  },
]);
