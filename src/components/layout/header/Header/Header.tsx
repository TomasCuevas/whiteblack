import { useContext } from "react";
import Link from "next/link";

//* ICONS *//
import { RiMenu3Line } from "react-icons/ri";

//* COMPONENTS *//
import { Icon, NavLink, ThemeSwitch } from "@/components";

//* CONTEXT *//
import { UIContext } from "@/context";

export const Header: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <header
      id="header"
      className="sticky top-0 bg-slate-200 left-0 z-30 h-[57px] flex w-full items-end justify-center border-b border-purple/50 dark:border-purple/20 backdrop-blur-[6px] dark:bg-dark/80"
    >
      <div className="flex h-full w-full max-w-[1200px] items-center px-4 sm:px-6 xl:px-0">
        <Link href="/" className="h-12">
          <Icon.Whiteblack className="h-full text-dark dark:text-white" />
        </Link>

        <div className="flex ml-auto gap-3 sm:hidden">
          <ThemeSwitch />
          <button>
            <RiMenu3Line
              onClick={toggleSidebar}
              className="h-10 w-10 text-purple"
            />
          </button>
        </div>

        <nav className="ml-auto hidden h-full sm:flex">
          <ul className="flex">
            <NavLink link="/" text="Inicio" />
            <NavLink link="/categorias" text="Categorías" />
            <div className="ml-3 items-center flex">
              <ThemeSwitch />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
