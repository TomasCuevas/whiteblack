import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";

//* icons *//
import { RiMenu3Line } from "react-icons/ri";

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

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setIsVisible(
      currentScrollPos === 0 ? true : currentScrollPos < scrollPosRef.current
    );

    if (currentScrollPos > scrollPosRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }

    scrollPosRef.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 z-30 flex h-16 w-screen items-end justify-center border-b border-purple/20 bg-light/20  backdrop-blur-[6px] md:h-[70px] ${
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
