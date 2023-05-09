import { useContext } from "react";
import Link from "next/link";

//* icons *//
import { RiMenu3Line } from "react-icons/ri";

//* components *//
import { NavLink } from "@/components/header/NavLink";

//* context *//
import { UIContext } from "@/context";

export const Header: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 z-30 flex h-16 w-screen items-end justify-center border-b border-purple/20 bg-light/20  backdrop-blur-md md:h-[70px]"
    >
      <div className="flex h-full w-full max-w-[1200px] items-center px-4 sm:px-6 xl:px-0">
        <Link href="/">
          <img
            src="/wb.svg"
            alt="whiteblack logo"
            className="h-10 duration-300 hover:opacity-50"
          />
        </Link>
        <button className="ml-auto sm:hidden">
          <RiMenu3Line
            onClick={toggleSidebar}
            className=" h-10 w-10 text-purple"
          />
        </button>
        <nav className="ml-auto hidden h-full sm:flex">
          <ul className="flex">
            <NavLink link="/" text="Home" />
            <NavLink link="/categorias" text="Categorías" />
          </ul>
        </nav>
      </div>
    </header>
  );
};
