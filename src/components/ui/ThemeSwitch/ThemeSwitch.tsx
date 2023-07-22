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
      className="p-2 border-slate-800 dark:border-slate-200 border rounded-md"
    >
      {currentTheme == "dark" ? (
        <BsSun className="text-lg text-slate-200" />
      ) : (
        <BsMoon className="text-lg text-slate-800" />
      )}
    </button>
  );
};
