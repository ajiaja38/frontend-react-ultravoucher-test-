import { Button } from "@material-tailwind/react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {
  const [role, setRole] = useState<string>("");

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
        {/* <li hidden={role !== "admin"}>
          <NavLink className="hover:underline" to="/users">
            user
          </NavLink>
        </li> */}
        <li hidden={role !== "admin"}>
          <NavLink className="hover:underline" to="/vacations">
            Pariwisata
          </NavLink>
        </li>
        <li>
          <Button
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
