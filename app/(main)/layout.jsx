import SideMenu from "./components/SideMenu/SideMenu";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="flex h-screen">
        <SideMenu />
        <main className="bg-gray-300 flex-1 overflow-auto flex justify-center ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
