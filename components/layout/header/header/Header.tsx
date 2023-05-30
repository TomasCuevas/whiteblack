import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";

//* icons *//
import { RiMenu3Line } from "react-icons/ri";

//* services *//
import { handleScroll } from "@/utils/handleScroll/handleScroll";

//* components *//
import { NavLink } from "@/components/layout";

//* styles *//
import Styles from "./header.module.css";

//* context *//
import { UIContext } from "@/context";

export const Header: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const scrollPosRef = useRef<number>(0);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleScroll(setIsVisible, scrollPosRef, timeoutRef)
    );

    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(setIsVisible, scrollPosRef, timeoutRef)
      );
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 z-30 flex h-16 w-screen items-end justify-center border-b border-purple/20  backdrop-blur-[6px] ${
        isVisible ? Styles.visible : Styles.scrolled
      }`}
    >
      <div className="flex h-full w-full max-w-[1200px] items-center px-4 sm:px-6 xl:px-0">
        <Link href="/">
          <img
            src="/wb.svg"
            alt="whiteblack logo"
            className="h-10 hover:opacity-80"
          />
        </Link>
        <button className="ml-auto sm:hidden">
          <RiMenu3Line
            onClick={toggleSidebar}
            className="h-10 w-10 text-purple"
          />
        </button>
        <nav className="ml-auto hidden h-full sm:flex">
          <ul className="flex">
            <NavLink link="/" text="Inicio" />
            <NavLink link="/categorias" text="Categorías" />
          </ul>
        </nav>
      </div>
    </header>
  );
};
