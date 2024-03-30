/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import useToast from "../../hooks/useToast";
import { ToastType } from "../../utils/enum/ToastTypeEnum";
import VacationService from "../../api/service/vacation.service";
import { IAddVacation } from "../../utils/interface/vacations.interface";
import { useNavigate } from "react-router-dom";

const AddVacation = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const { showToast } = useToast();
  const navigate = useNavigate();

  const addVacation = async () => {
    try {
      if (!name || !address || !description || !latitude || !longitude) {
        return showToast(ToastType.ERROR, "Please fill all the fields");
      }

      const data: IAddVacation = {
        name,
        address,
        description,
        latitude,
        longitude,
      };

      await VacationService.createVacationHandler(data);
      showToast(ToastType.SUCCESS, "Pariwisata Berhasil ditambahkan");
      navigate("/vacations");
    } catch (error: any) {
      showToast(ToastType.ERROR, error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center">
      <form className="w-96 border rounded-md p-3 mt-5 flex flex-col gap-4">
        <div>
          <Input
            label="Nama Pariwisata"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <Input
            label="Alamat Pariwisata"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <Input
            label="Deskripsi Pariwisata"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <Input
            label="latitude"
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <Input
            label="longitude"
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <Button
          onClick={addVacation}
          variant="gradient"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Tambah Pariwisata
        </Button>
      </form>
    </div>
  );
};

export default AddVacation;
