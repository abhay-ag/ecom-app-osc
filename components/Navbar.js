import Link from "next/link";
function Navbar() {
  return (
    <div className="container m-auto h-28 bg-white sticky top-0 py-8 px-4 flex flex-row justify-between items-center">
      <div className="">
        <img src="/logo.png" alt="Wasatch Ski Company" />
      </div>
      <div className="flex flex-row space-x-4 font-light text-xl text-black">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/products"><a>Products</a></Link>
        <Link href="/contact"><a>Contact Us</a></Link>
      </div>
    </div>
  );
}

export default Navbar;
