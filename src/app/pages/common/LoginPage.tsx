/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../../api/service/Auth.service";
import useToast from "../../hooks/useToast";
import { ToastType } from "../../utils/enum/ToastTypeEnum";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showToast } = useToast();
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      if (!email || !password) {
        return showToast(ToastType.ERROR, "Email dan Password harus diisi");
      }

      const data = {
        email,
        password,
      };

      const response = await AuthService.loginHandler(data);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      showToast(ToastType.SUCCESS, "Login Berhasil");
      navigate("/home");
    } catch (error: any) {
      showToast(ToastType.ERROR, error.response.data.message);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-50">
      <div className="p-5 border rounded-md shadow-md w-96 bg-white">
        <h1 className="font-bold text-xl text-center">Silahkan Login</h1>
        <form className="mt-5 flex flex-col gap-4">
          <div>
            <Input
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>

          <Button
            onClick={loginHandler}
            variant="gradient"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Login
          </Button>
          <span className="text-xs text-center">
            Belum Terdaftar?,{" "}
            <NavLink className="hover:underline" to={"/register"}>
              Daftar Sekarang
            </NavLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
