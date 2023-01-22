import { useContext } from "react";

//* icons *//
import { MdMenu, MdClose } from "react-icons/md";

//* context *//
import { UIContext } from "../../context";

export const Header: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);

  return (
    <header className="fixed top-0 left-0 z-30 flex h-20 w-screen items-center justify-center px-4">
      <div className="flex h-14 w-full max-w-[1200px] items-center overflow-hidden rounded-full border border-white bg-dark/60 px-4 backdrop-blur-md">
        <h1 className="text-lg font-semibold tracking-[2px] text-white">
          whiteblack
        </h1>
        <MdMenu
          onClick={toggleSidebar}
          className="ml-auto h-10 w-10 text-white"
        />
      </div>
    </header>
  );
};
