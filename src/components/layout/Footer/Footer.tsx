import Link from "next/link";

//* ICONS *//
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto flex w-full items-center justify-center bg-slate-200 border-t border-purple dark:border-transparent dark:bg-light/50 px-4 py-6 sm:px-6">
      <div className="flex w-full max-w-[1000px] justify-end gap-8 sm:gap-16">
        <Link
          href="https://github.com/TomasCuevas"
          target="_blank"
          className="group flex h-6 items-center gap-2"
        >
          <FaGithub className="h-full w-full text-purple dark:text-purple/60 hover:text-purple" />
          <p className="text-dark dark:text-white">GitHub</p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/tom%C3%A1s-cuevas-dev/"
          target="_blank"
          className="flex h-6 items-center gap-2"
        >
          <FaLinkedinIn className="h-full w-full text-purple dark:text-purple/60 hover:text-purple" />
          <p className="text-dark dark:text-white">LinkedIn</p>
        </Link>
      </div>
    </footer>
  );
};
