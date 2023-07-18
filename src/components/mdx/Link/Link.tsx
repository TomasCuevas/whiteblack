import NextLink from "next/link";

//* ICON *//
import { RiNavigationLine } from "react-icons/ri";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
  url: string;
}

export const Link: React.FC<Props> = ({ children, url }) => {
  return (
    <NextLink
      href={url}
      target="_blank"
      className="group border-b border-[#9f53fd] hover:opacity-80"
    >
      <>
        <span className=" font-inter text-[22px] font-bold text-[#9f53fd]">
          {children}
        </span>
        <RiNavigationLine className="ml-1 mb-1 inline text-[#9f53fd]" />
      </>
    </NextLink>
  );
};
