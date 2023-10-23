import { createBrowserRouter, redirect } from "react-router-dom";

// Routes
import Dashboard from "./dashboard/Dashboard";
import Home from "./Home";
import NotFound from "./NotFound";
import Login from "./Login";
import Logout from "./Logout";
import { isAuthenticated } from "../lib/supabase";
import NeonCat from "./NeonCat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => {
      return null;
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: async () => {
      let isLoggedIn = await isAuthenticated();
      if (isLoggedIn) throw redirect("/dashboard");
      return null;
    },
  },
  {
    path: "/logout",
    element: <Logout />,
    loader: async () => {
      let isLoggedIn = await isAuthenticated();
      if (!isLoggedIn) throw redirect("/login");
      return null;
    },
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: async () => {
      let isLoggedIn = await isAuthenticated();
      if (!isLoggedIn) throw redirect("/login");
      return null;
    },
    children: [
      {
        path: "/dashboard/settings",
        element: <></>,
        loader: async () => {
          let isLoggedIn = await isAuthenticated();
          if (!isLoggedIn) {
            let params = new URLSearchParams();
            params.set("redirect", "/dashboard/settings");
            throw redirect("/login?" + params.toString());
          }
          return null;
        },
      },
    ],
  },
  {
    path: "/neon-cat",
    element: <NeonCat />,
  },
  {
    path: "*",
    element: <NotFound />,
    loader: () => {
      return null;
    },
  },
]);
