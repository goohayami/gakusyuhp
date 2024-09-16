import { MdOutlineQueueMusic } from "react-icons/md";
import NavItem from "./NvItem/NavItem";

const NavList = () => {
  const navList = [
    {
      id: 1,
      label: "はじめに",
      link: "/",
      icon: <MdOutlineQueueMusic className="size-7" />,
    },
    {
      id: 2,
      label: "コナンメインテーマ",
      link: "/conan",
      icon: <MdOutlineQueueMusic className="size-7" />,
    },
    {
      id: 3,
      label: "リコーダー",
      link: "/recorder",
      icon: <MdOutlineQueueMusic className="size-7" />,
    },
    {
      id: 4,
      label: "けんばん",
      link: "/kenban",
      icon: <MdOutlineQueueMusic className="size-7" />,
    },
  ];
  return (
    <div className="mt-24">
      {navList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
