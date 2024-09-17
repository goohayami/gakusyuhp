import { MdOutlineQueueMusic } from "react-icons/md";
import NavItem from "./NvItem/NavItem";

const NavList = () => {
  const navList = [
    {
      id: 1,
      label: "はじめに",
      link: "/",
      icon: <MdOutlineQueueMusic className="size-5" />,
    },
    {
      id: 2,
      label: "名探偵コナン      \n（けんばん）",
      link: "/conan",
      icon: <MdOutlineQueueMusic className="size-5" />,
    },
    {
      id: 3,
      label: "名探偵コナン \n（えんそう）",
      link: "/youtube",
      icon: <MdOutlineQueueMusic className="size-5" />,
    },
    {
      id: 4,
      label: "リコーダー",
      link: "/recorder",
      icon: <MdOutlineQueueMusic className="size-5" />,
    },
  ];
  return (
    <div className="mt-18">
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
