/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";
import { ToastType } from "../../utils/enum/ToastTypeEnum";
import { IRegisterUser } from "../../utils/interface/vacations.interface";
import UserService from "../../api/service/User.service";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const { showToast } = useToast();
  const navigate = useNavigate();

  const registerHandler = async () => {
    try {
      const data: IRegisterUser = {
        name,
        email,
        password,
        confirmPassword,
        phone,
      };
      await UserService.registerAdminHandler(data);
      showToast(ToastType.SUCCESS, "Registrasi Berhasil");
      navigate("/");
    } catch (error: any) {
      showToast(ToastType.ERROR, error.response.data.message);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-50">
      <div className="p-5 border rounded-md shadow-md w-96 bg-white">
        <h1 className="font-bold text-xl text-center">Silahkan Daftar</h1>
        <form className="mt-5 flex flex-col gap-4">
          <div>
            <Input
              label="Nama"
              type="text"
              onChange={(e) => setName(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>

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

          <div>
            <Input
              label="Konfirmasi Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Input
              label="No Telepon"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>

          <Button
            onClick={registerHandler}
            variant="gradient"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Register
          </Button>
          <span className="text-xs text-center">
            Sudah Terdaftar?,{" "}
            <NavLink className="hover:underline" to={"/"}>
              Login Sekarang
            </NavLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
