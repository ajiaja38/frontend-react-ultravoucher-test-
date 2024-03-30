/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import useToast from "../../hooks/useToast";
import { ToastType } from "../../utils/enum/ToastTypeEnum";
import { IVacation } from "../../utils/interface/vacations.interface";
import { useEffect, useState } from "react";
import VacationService from "../../api/service/vacation.service";
import Pagination from "../pagination";
import { NavLink } from "react-router-dom";

const TablePariwisata = () => {
  const { showToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [vacation, setVacation] = useState<IVacation[]>([]);

  const getAllVacation = async () => {
    try {
      const response = await VacationService.getAllVacationHandlerPaginate(
        currentPage,
        10,
        ""
      );
      setCurrentPage(parseInt(response.page));
      setTotalPages(response.totalPages);
      setVacation(response.data);
    } catch (error: any) {
      showToast(ToastType.ERROR, error.response.data.message);
    }
  };

  const deleteVacation = async (id: string) => {
    try {
      await VacationService.deleteVacationHandler(id);
      showToast(ToastType.SUCCESS, "Pariwisata Berhasil dihapus");
      getAllVacation();
    } catch (error: any) {
      showToast(ToastType.ERROR, error.response.data.message);
    }
  };

  useEffect(() => {
    getAllVacation();
  }, [currentPage]);

  return (
    <div>
      <div>
        <NavLink to="/vacations/add">
          <Button
            color="green"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Tambah Wisata
          </Button>
        </NavLink>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                No
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Nama
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Alamat
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Description
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Latitude
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Longitude
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-center font-semibold text-gray-900">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {vacation.map((data, index) => (
              <tr
                key={data.id}
                className="hover:bg-gray-100 transition-all ease-in-out"
              >
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold">
                  {index + 1 + (currentPage - 1) * 5}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data.address}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data.description}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data.latitude}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data.longitude}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center items-center gap-2">
                  <NavLink to={`/vacations/${data.id}`}>
                    <Button
                      color="yellow"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                    onClick={() => deleteVacation(data.id)}
                    color="red"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TablePariwisata;
