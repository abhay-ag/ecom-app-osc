import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Navbar() {
  return (
    <div className="container m-auto h-28 bg-white sticky top-0 py-8 px-4 flex flex-row items-center">
      <Link href="/">
        <a>
          <img src="/logo.png" alt="Wasatch Ski Company" />
        </a>
      </Link>
      <div className="flex-1 flex flex-row justify-end space-x-8">
        <div className="flex flex-row space-x-4 font-light text-xl text-black">
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
        <div>
          <Link href="/cart">
            <a>
              <AiOutlineShoppingCart className="text-3xl" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
