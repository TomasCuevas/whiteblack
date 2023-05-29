import NextLink from "next/link";

import { AiOutlineLink } from "react-icons/ai";
import { RiNavigationLine } from "react-icons/ri";

//* interface *//
interface Props {
  children: React.ReactNode;
  url: string;
}

export const Link: React.FC<Props> = ({ children, url }) => {
  return (
    <NextLink href={url} target="_blank" className="group border-b">
      <>
        <span className=" font-inter text-xl font-bold text-[#4285f4] group-hover:text-[#62a5f4]">
          {children}
        </span>
        <RiNavigationLine className="ml-1 mb-1 inline group-hover:text-white" />
      </>
    </NextLink>
  );
};
