import LoginPage from "./common/LoginPage";
import Register from "./common/Register";
import NotFoundPage from "./error/NotFoundPage";
import HomePage from "./private/HomePage";
import UserPage from "./private/UserPage";
import VacationPage from "./private/VacationPage";

export const commonPage = {
  LoginPage: <LoginPage />,
  RegisterPage: <Register />,
};

export const privatePage = {
  HomePage: <HomePage />,
  UserPage: <UserPage />,
  VacationPage: <VacationPage />,
};

export const errorPage = {
  NotFoundPage: <NotFoundPage />,
};
