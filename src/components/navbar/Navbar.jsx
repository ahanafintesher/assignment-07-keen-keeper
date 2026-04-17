"use client";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <RiHome2Line size={20} /> },
    { href: "/timeline", label: "Timeline", icon: <CiClock2 size={20} strokeWidth={1} /> },
    { href: "/stats", label: "Stats", icon: <ImStatsDots size={18} /> },
  ];

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 border-b-2 border-gray-100">
        
       
         <div className="flex-1">
          <p className="text-2xl">
            <span className="font-bold">Keen</span>Keeper
          </p>
        </div>

       
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:bg-transparent">
                  <button className={`btn btn-ghost text-lg font-semibold ${pathname === link.href ? "bg-[#244D3F] text-white" : ""}`}>
                    <span>{link.icon}</span>{link.label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="lg:hidden">
          <button className="btn btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>

      </div>

     
      {menuOpen && (
        <div className="lg:hidden bg-base-100 border-b-2 border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  <button className={`btn btn-ghost w-full justify-start text-lg font-semibold ${pathname === link.href ? "bg-[#244D3F] text-white" : ""}`}>
                    <span>{link.icon}</span>{link.label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;