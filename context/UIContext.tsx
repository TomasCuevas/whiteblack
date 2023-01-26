import { createContext, useState, Dispatch, SetStateAction } from "react";

//* CONTEXT *//
//* CONTEXT *//
interface UIContextProps {
  feedPage: number;
  isSidebarOpen: boolean;
  setFeedPage: Dispatch<SetStateAction<number>>;
  toggleSidebar(): void;
}

export const UIContext = createContext({} as UIContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [feedPage, setFeedPage] = useState(1);

  const toggleSidebar = () => {
    isSidebarOpen
      ? document.body.classList.remove("body__fix")
      : document.body.classList.add("body__fix");

    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <UIContext.Provider
      value={{
        // getters
        feedPage,
        isSidebarOpen,

        // methods
        setFeedPage,
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
