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
      label: "名探偵コナン メインテーマ",
      link: "/conan",
      icon: <MdOutlineQueueMusic className="size-5" />,
    },
    {
      id: 6,
      label: "コナン　けんばんⒶⒷⒸ",
      link: "/kenban-mihon",
      icon: <MdOutlineQueueMusic className="size-5" />,
    }, 
    {
      id: 7,
      label: "コナン　けんばんⒹⒺⒻ",
      link: "/kenban-def",
      icon: <MdOutlineQueueMusic className="size-5" />,
    }, 
    {
      id: 8,
      label: "コナン　けんばんラスト",
      link: "/kenban-last",
      icon: <MdOutlineQueueMusic className="size-5" />,
    },
       {
      id: 3,
      label: "よろこびのうた（リコーダー）",
      link: "/yorokobi",
      icon: <MdOutlineQueueMusic className="size-5" />,
    },
    {
      id: 4,
      label: "ちょうちょ（リコーダー）",
      link: "/chocho",
      icon: <MdOutlineQueueMusic className="size-5" />,
    },
    {
      id: 5,
      label: "メリーさんのひつじ（リコーダー）",
      link: "/merry",
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
