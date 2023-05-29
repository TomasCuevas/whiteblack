import { Children } from "react";

//* interface *//
interface Props {
  children: React.ReactNode;
}

export const Section: React.FC<Props> = ({ children }) => {
  return <section>{children}</section>;
};
