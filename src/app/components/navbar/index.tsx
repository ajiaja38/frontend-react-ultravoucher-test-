/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";
import { ToastType } from "../../utils/enum/ToastTypeEnum";
import AuthService from "../../api/service/Auth.service";

const NavbarComponents = () => {
  const [role, setRole] = useState<string>("");
  const { showToast } = useToast();
  const navigate = useNavigate();

  const getRole = () => {
    const decoded: {
      id: string;
      name: string;
      role: string;
      iat: number;
      exp: number;
    } = jwtDecode(localStorage.getItem("accessToken") || "");
    setRole(decoded.role);
  };

  const logoutHandler = async () => {
    try {
      await AuthService.logoutHandler();
      navigate("/");
    } catch (error: any) {
      showToast(ToastType.ERROR, error.response.data.message);
    }
  };

  useEffect(() => {
    getRole();
  }, []);

  return (
    <div className="w-full px-4 py-3 border mb-4 flex justify-between">
      <h1 className="text-lg font-bold">Pariwisata Lampung</h1>
      <ul className="flex justify-center items-center gap-3">
        <li>
          <NavLink className="hover:underline" to="/home">
            Home
          </NavLink>
        </li>
        <li hidden={role !== "admin"}>
          <NavLink className="hover:underline" to="/vacations">
            Pariwisata
          </NavLink>
        </li>
        <li>
          <Button
            onClick={logoutHandler}
            color="red"
            size="sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarComponents;
