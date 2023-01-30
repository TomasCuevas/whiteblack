import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//* icons *//
import { MdArrowRight } from "react-icons/md";

//* context *//
import { UIContext } from "../../context";

//* interface *//
interface Props {
  link: string;
  text: string;
}

export const SidebarLink: React.FC<Props> = ({ link, text }) => {
  const { toggleSidebar } = useContext(UIContext);
  const { pathname } = useRouter();

  return (
    <li className="group flex" onClick={toggleSidebar}>
      <Link
        href={link}
        className={`flex w-full items-center gap-2 rounded-br-md ${
          pathname === link ? "border-white" : "border-white/70"
        } border-b border-r-2 py-2 pr-5 duration-300`}
      >
        <MdArrowRight
          className={`text-4xl ${
            pathname === link ? "text-orange" : "text-orange/70"
          } duration-300 group-hover:text-orange`}
        />
        <span
          className={`text-xl font-light ${
            pathname === link ? "text-white" : "text-white/70"
          } duration-300 group-hover:text-white`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};
