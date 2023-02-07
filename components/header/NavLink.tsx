import Link from "next/link";
import { useRouter } from "next/router";

//* interface *//
interface Props {
  link: string;
  text: string;
}

export const NavLink: React.FC<Props> = ({ link, text }) => {
  const { pathname } = useRouter();

  return (
    <li
      className={`group flex items-center border-b-2 duration-300 ${
        pathname === link ? "border-white" : "border-dark"
      }`}
    >
      <Link
        href={link}
        className="flex h-full items-center justify-center px-5"
      >
        <span
          className={`font-sans text-lg font-light ${
            pathname === link ? "text-white" : "text-white/50"
          } duration-300 group-hover:text-white`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};
