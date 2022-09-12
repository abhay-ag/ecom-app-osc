import { BsSun, BsSunFill } from "react-icons/bs";
import { useStateValue } from "../StateProvider";

function Toggler() {
  const [{ mode }, dispatch] = useStateValue();
  return (
    <button
      className={`${
        mode === "light" ? "bg-[#191c20] text-white" : "bg-white text-black"
      } text-4xl p-4 rounded-full fixed top-1/2 right-0 translate-x-1/2 -translate-y-1/2`}
      onClick={() => {
        dispatch({
          type: "TOGGLE_MODE",
        });
      }}
    >
      {mode === "light" ? <BsSun /> : <BsSunFill />}
    </button>
  );
}

export default Toggler;
