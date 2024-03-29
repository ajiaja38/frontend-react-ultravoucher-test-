import LoginPage from "./common/LoginPage";
import Register from "./common/Register";
import NotFoundPage from "./error/NotFoundPage";
import HomePage from "./private/HomePage";

export const commonPage = {
  LoginPage: <LoginPage />,
  RegisterPage: <Register />,
};

export const privatePage = {
  HomePage: <HomePage />,
};

export const errorPage = {
  NotFoundPage: <NotFoundPage />,
};
