import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

//* ICONS *//
import { BsSun, BsMoon } from "react-icons/bs";

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<any>();

  useEffect(() => {
    setCurrentTheme(() => (theme === "system" ? systemTheme : theme));
  }, [theme]);

  return (
    <button
      onClick={() =>
        currentTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
      className="py-2 px-[10px] group shadow-inner rounded-md shadow-black/20 dark:shadow-slate-400/20"
    >
      {currentTheme == "dark" ? (
        <BsSun className="text-lg text-slate-200 group-hover:text-white" />
      ) : (
        <BsMoon className="text-lg text-slate-800 group-hover:text-dark" />
      )}
    </button>
  );
};
