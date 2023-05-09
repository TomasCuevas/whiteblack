import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//* icons *//
import { RiArrowDropRightFill } from "react-icons/ri";

//* context *//
import { UIContext } from "@/context";

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
        } border-b border-r-2 py-2 pr-5 font-roboto`}
      >
        <RiArrowDropRightFill
          className={`text-4xl ${
            pathname === link ? "text-purple" : "text-purple/70"
          } group-hover:text-purple`}
        />
        <span
          className={`font-inter text-xl font-light ${
            pathname === link ? "text-white" : "text-white/50"
          } group-hover:text-white`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};
