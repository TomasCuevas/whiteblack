import Link from "next/link";
import { useContext } from "react";

//* icons *//
import { MdClose } from "react-icons/md";

//* context *//
import { UIContext } from "../../context";
import { SidebarLink } from "./SidebarLink";

export const MobileSidebar: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <aside className="fixed top-0 left-0 z-50 h-screen w-screen bg-dark/90 backdrop-blur-sm sm:hidden">
      <div className="flex h-16 w-full items-end justify-center px-4">
        <div className="flex h-14 w-full items-center">
          <MdClose
            onClick={toggleSidebar}
            className="ml-auto h-10 w-10 text-purple"
          />
        </div>
      </div>
      <div className="mt-10 px-4">
        <ul className="flex flex-col gap-6">
          <SidebarLink link="/" text="Home" />
          <SidebarLink link="/categorias" text="Categorías" />
        </ul>
      </div>
    </aside>
  );
};
