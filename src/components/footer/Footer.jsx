import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#244D3F" }} className="text-white py-10 px-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center gap-4">
        
        {/* Logo */}
        <p className="text-4xl font-bold">
          <span className="font-bold">Keen</span>Keeper
        </p>

        {/* Tagline */}
        <p className="text-sm text-gray-300 text-center max-w-md">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <p className="font-semibold mt-2">Social Links</p>
        <div className="flex gap-3">
          <a href="#" className="bg-white text-[#244D3F] rounded-full p-2 hover:opacity-80 transition">
            <IoLogoYoutube size={20} />
          </a>
          <a href="#" className="bg-white text-[#244D3F] rounded-full p-2 hover:opacity-80 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="bg-white text-[#244D3F] rounded-full p-2 hover:opacity-80 transition">
            <FaXTwitter size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 w-full mt-4 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;