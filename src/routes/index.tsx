import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages";
import PokeDetail from "@/pages/pokemon-detail";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail",
      element: <PokeDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}
