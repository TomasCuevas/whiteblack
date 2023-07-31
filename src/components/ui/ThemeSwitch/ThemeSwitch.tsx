import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

//* ICONS *//
import { BsSun, BsMoon } from "react-icons/bs";

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<any>();

  useEffect(() => {
    setTheme(theme === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    setCurrentTheme(() => (theme === "light" ? "light" : "dark"));
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-track-color",
      theme === "light" ? "#04030c" : "#e2e8f0"
    );
  }, [theme]);

  return (
    <button
      onClick={() =>
        currentTheme === "light" ? setTheme("dark") : setTheme("light")
      }
      className="py-2 px-[10px] group shadow-inner rounded-md shadow-black/20 dark:shadow-slate-400/20"
    >
      {currentTheme == "light" ? (
        <BsMoon className="text-lg text-slate-800 group-hover:text-dark" />
        ) : (
        <BsSun className="text-lg text-slate-200 group-hover:text-white" />
      )}
    </button>
  );
};
