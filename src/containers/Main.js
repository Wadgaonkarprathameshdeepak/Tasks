import Userinterface from "../components/Userinterface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  return (
    <div className="Main">
      <Userinterface />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default Main;
