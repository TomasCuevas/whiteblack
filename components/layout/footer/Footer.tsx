import Link from "next/link";

//* icons *//
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto flex w-full items-center justify-center bg-light/50 px-4 py-6 sm:px-6">
      <p className="whitespace-nowrap font-inter text-[14px] text-gray-300">
        © Copyright Tomás Cuevas 2023
      </p>
      <div className="flex w-full max-w-[1000px] justify-end gap-10">
        <Link
          href="https://github.com/TomasCuevas"
          target="_blank"
          className="group flex w-5 items-center"
        >
          <FaGithub className="h-full w-full text-purple/60 hover:text-purple" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tom%C3%A1s-cuevas-dev/"
          target="_blank"
          className="flex w-5 items-center"
        >
          <FaLinkedinIn className="h-full w-full text-purple/60 hover:text-purple" />
        </Link>
      </div>
    </footer>
  );
};
