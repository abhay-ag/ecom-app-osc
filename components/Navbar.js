import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateValue } from "../StateProvider";

function Navbar({ cartQty }) {
  const [{ mode }, dispatch] = useStateValue();
  return (
    <>
      <style jsx global>{`
        body {
          background: ${mode === "dark" ? "black" : "white"};
        }
      `}</style>
      <div
        className={`container m-auto ${
          mode === "light" ? "bg-white text-black" : "bg-black text-white"
        } py-6 px-5 flex flex-row items-center`}
      >
        <Link href="/">
          <a>
            {mode === "light" ? (
              <img src="/logo.png" alt="Wasatch Ski Company" />
            ) : (
              <img src="/white-logo.png" alt="Wasatch Ski Company" />
            )}
          </a>
        </Link>
        <div className="flex-1 flex flex-row justify-end space-x-7 items-center">
          <div
            className={`flex flex-row space-x-5 font-light text-normal ${
              mode === "light" ? "text-black" : "text-white"
            }`}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/products">
              <a>Products</a>
            </Link>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </div>
          <button className="relative">
            <Link href="/cart">
              <a>
                <AiOutlineShoppingCart className="text-3xl" />
              </a>
            </Link>
            <div className="border-2 box-border px-1.5 py-0.5 font-semibold text-xs items-center justify-center border-white text-white bg-indigo-500 rounded-full absolute -top-2 -right-3">
              {cartQty ? cartQty : 0}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
