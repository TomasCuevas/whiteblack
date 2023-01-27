import Link from "next/link";

import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto flex w-full bg-white/5 px-4 py-6 sm:px-6">
      <div className="flex w-full justify-evenly gap-4">
        <Link
          href="https://github.com/TomasCuevas"
          target="_blank"
          className="group flex w-6 items-center"
        >
          <FaGithub className="h-full w-full text-white/60 duration-300 hover:text-white" />
        </Link>
        <Link
          href="https://twitter.com/TomasC0D1NG"
          target="_blank"
          className="flex w-6 items-center"
        >
          <FaTwitter className="h-full w-full text-white/60 duration-300 hover:text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tom%C3%A1s-cuevas-dev/"
          target="_blank"
          className="flex w-6 items-center"
        >
          <FaLinkedinIn className="h-full w-full text-white/60 duration-300 hover:text-white" />
        </Link>
      </div>
    </footer>
  );
};
