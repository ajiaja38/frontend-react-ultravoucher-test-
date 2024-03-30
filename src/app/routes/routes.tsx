import { createBrowserRouter } from "react-router-dom";
import { commonPage, errorPage, privatePage } from "../pages";
import RequireAuth from "../middleware/RequireAuth";
import LayoutAuth from "../components/layout";

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
    path: "/",
    element: <RequireAuth redirectPath="/" />,
    children: [
      {
        path: "/",
        element: <LayoutAuth />,
        children: [
          {
            path: "/home",
            element: privatePage.HomePage,
          },
          {
            path: "/users",
            element: privatePage.UserPage,
          },
          {
            path: "/vacations",
            element: privatePage.VacationPage,
          },
          {
            path: "/vacations/add",
            element: privatePage.AddVacation,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: errorPage.NotFoundPage,
  },
]);

export default router;
