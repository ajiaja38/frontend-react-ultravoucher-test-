import { toast } from "react-toastify";
import { ToastType } from "../utils/enum/ToastTypeEnum";

const useToast = () => {
  const showToast = (type: ToastType, message: string) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return {
    showToast,
  };
};

export default useToast;
