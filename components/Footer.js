import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import {FaFacebook, FaFacebookF, FaLinkedinIn} from "react-icons/fa";
function Footer() {
  return (
    <div className="container px-5 m-auto flex flex-row items-center mt-16">
      <img src="/logo-footer.png" alt="" />
      <div className="border-l-2 flex flex-row px-4 mx-4 py-1 text-slate-500 text-sm">
        &copy;&nbsp;{new Date().getFullYear()}&nbsp;Wasatch Ski Company
      </div>
      <div className="flex-1 flex flex-row justify-end space-x-2 text-slate-500">
        <Link href="https://twitter.com">
          <a>
            <AiOutlineTwitter className="text-xl"/>
          </a>
        </Link>
        <Link href="https://linkedin.com/in">
          <a>
            <FaLinkedinIn className="text-xl"/>
          </a>
        </Link>
        <Link href="https://facebook.com">
          <a>
            <FaFacebookF className="text-xl"/>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
