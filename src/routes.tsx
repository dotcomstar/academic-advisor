import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserProfilePage from "./pages/UserProfilePage";
import PrivateRoutes from "./pages/PrivateRoutes";
import { LandingPage } from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // Default component
      { path: "landing-page", element: <LandingPage /> },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "profile",
            element: <UserProfilePage />,
            // children: [{ path: ":username", element: <UserDetail /> }],
          },
        ],
      },
    ],
  },
]);

export default router;
