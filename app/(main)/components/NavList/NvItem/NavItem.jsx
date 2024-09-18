"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ label, link, icon }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={link}
        className={`flex p-4 items-center w-full hover:bg-gray-700 font-midium  whitespace-nowrap ${
          pathname === link
            ? "bg-gray-700 border-r-4 border-r-red-600 text-white"
            : ""
        }`}
      >
        <div className="mr-2">{icon}</div>
        <div>{label}</div>
      </Link>
    </div>
  );
};

export default NavItem;
