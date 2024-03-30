/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { IVacation } from "../../utils/interface/vacations.interface";
import useToast from "../../hooks/useToast";
import { ToastType } from "../../utils/enum/ToastTypeEnum";
import VacationService from "../../api/service/vacation.service";

const Maps = () => {
  const [vacations, setVacations] = useState<IVacation[]>([]);
  const { showToast } = useToast();

  const getAllVacation = async () => {
    try {
      const response = await VacationService.getAllVacationHandler();
      console.log(response.data);
      setVacations(response.data);
    } catch (error: any) {
      showToast(ToastType.ERROR, error.response.data.message);
    }
  };

  useEffect(() => {
    getAllVacation();
  }, []);

  return (
    <div className="w-full h-[calc(100vh-90px)] border rounded-md shadow-md">
      <MapContainer
        className="w-full h-full rounded-md outline-none z-0"
        center={[-5.388743470549211, 105.02406767448998]}
        zoom={9}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vacations.length > 0 &&
          vacations.map((data) => (
            <Marker
              key={data._id}
              position={[parseInt(data.latitude), parseInt(data.longitude)]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
              eventHandlers={{
                mouseover: (e) => {
                  e.target.openPopup();
                },
              }}
            >
              <Popup>{data.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
