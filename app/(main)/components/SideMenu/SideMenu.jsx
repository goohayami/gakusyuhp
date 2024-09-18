import NavList from "../NavList/NavList";
const SideMenu = () => {
  return (
    <div className="w-80 pt-8 bg-gray-800 text-gray-400">
      <div>
        <h1 className="p-3 tx-4 text-xl font-bold text-white">学習発表会</h1>
        <NavList />
      </div>
    </div>
  );
};

export default SideMenu;
