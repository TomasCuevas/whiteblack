import { createContext, useState } from "react";

//* CONTEXT *//
//* CONTEXT *//
interface UIContextProps {
  isSidebarOpen: boolean;
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

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <UIContext.Provider
      value={{
        // getters
        isSidebarOpen,

        // methods
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
