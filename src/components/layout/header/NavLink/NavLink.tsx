import Link from "next/link";
import { useRouter } from "next/router";

//* INTERFACE *//
interface Props {
  link: string;
  text: string;
}

export const NavLink: React.FC<Props> = ({ link, text }) => {
  const { pathname } = useRouter();

  return (
    <li
      className={`group flex items-center border-b-2 ${
        pathname === link ? "border-purple" : "border-[#0000]"
      }`}
    >
      <Link
        href={link}
        className="flex h-full items-center justify-center px-5"
      >
        <span
          className={`font-merriweather text-lg font-extralight ${
            pathname === link
              ? "text-dark dark:text-white"
              : "text-dark/60 dark:text-white/50"
          } group-hover:text-dark dark:group-hover:text-white`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};
