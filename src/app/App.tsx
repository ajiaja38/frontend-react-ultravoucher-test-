import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"light"}
      />
    </>
  );
};

export default App;
