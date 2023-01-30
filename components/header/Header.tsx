import { useContext, useEffect } from "react";
import Link from "next/link";

//* icons *//
import { MdMenu } from "react-icons/md";

//* components *//
import { NavLink } from "./NavLink";

//* context *//
import { UIContext } from "../../context";

const useEffectClient = typeof window === undefined ? null : useEffect;

export const Header: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);
  let lastScroll = 100;

  useEffectClient!(() => {
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 100) return;

      if (currentScroll > lastScroll) {
        header?.classList.add("scrollDown");
        lastScroll = window.screenY;
      } else {
        header?.classList.remove("scrollDown");
      }

      lastScroll = currentScroll;
    });

    return removeEventListener("scroll", () => {});
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 z-30 flex h-16 w-screen items-end justify-center shadow-lg shadow-orange/5 backdrop-blur-sm md:h-[70px]"
    >
      <div className="flex h-full w-full max-w-[1200px] items-center px-4 sm:px-6 xl:px-0">
        <Link href="/">
          <h1 className="text-lg font-semibold tracking-[2px] text-white">
            whiteblack
          </h1>
        </Link>
        <button className="ml-auto sm:hidden">
          <MdMenu onClick={toggleSidebar} className=" h-10 w-10 text-orange" />
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
