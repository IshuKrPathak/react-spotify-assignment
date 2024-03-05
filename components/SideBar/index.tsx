import Logo from "./Logo";
import Menu from "./Menu";

function SideBar() {
  return (
    <div className="w-60 h-full bg-sidebarBackground overflow-y-scroll no-scrollbar">
      <Logo />
      <Menu />
      <div className="p-2">
        <div className="text-gray-500 my-3 mx-4 py-3 border-t border-gray-500 hover:text-white hover:cursor-pointer">
          👩‍💻- Ishu Pathak
        </div>
      </div>
    </div>
  );
}

export default SideBar;
