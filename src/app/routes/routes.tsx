import { createBrowserRouter } from "react-router-dom";
import { commonPage, errorPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: commonPage.LoginPage,
  },
  {
    path: "/register",
    element: commonPage.RegisterPage,
  },
  {
    path: "/*",
    element: errorPage.NotFoundPage,
  },
]);

export default router;
