"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// interface NavItemPros {
//   label: string;
//   link: string;
//   icon: React.ReactNode;
// }

const NavItem = ({ label, link, icon }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={link}
        className={`flex p-4 items-center w-full hover:bg-gray-700 font-midium ${
          pathname === link ? "bg-gray-600 border-r-4 border-r-yellow-200" : ""
        }`}
      >
        <div className="mr-2">{icon}</div>
        <div>{label}</div>
      </Link>
    </div>
  );
};

export default NavItem;