import { Dispatch, MutableRefObject, SetStateAction } from "react";

export const handleScroll = (
  handleVisible: Dispatch<SetStateAction<boolean>>,
  scrollPosition: MutableRefObject<number>,
  timeoutRef: MutableRefObject<any>
) => {
  const currentScrollPos = window.pageYOffset;

  handleVisible(
    currentScrollPos === 0 ? true : currentScrollPos < scrollPosition.current
  );

  if (currentScrollPos > scrollPosition.current) {
    handleVisible(false);
  }

  scrollPosition.current = currentScrollPos;
};
