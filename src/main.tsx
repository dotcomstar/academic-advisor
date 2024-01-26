import { Auth0Provider } from "@auth0/auth0-react";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-z5tsx5fdjvquu84a.us.auth0.com"
      clientId="pWzjI5mPYfPrXQffYh3e0pSFh16kVTyD"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
    <Analytics mode="production" />
  </React.StrictMode>
);
