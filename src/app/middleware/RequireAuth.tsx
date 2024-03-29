import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ redirectPath }: { redirectPath: string }) => {
  const token: string | null = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default RequireAuth;
