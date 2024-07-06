import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "character/:id",
        element: <Detail />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
