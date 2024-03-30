import { Outlet } from "react-router-dom";
import NavbarComponents from "../navbar";

const LayoutAuth = () => {
  return (
    <>
      <NavbarComponents />
      <Outlet />
    </>
  );
};

export default LayoutAuth;
