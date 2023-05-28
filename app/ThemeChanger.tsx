import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="border p-2 rounded-md border-gray-600">
      {currentTheme === "dark" ? (
        <BsFillSunFill
          className="h-4 w-4 md:h-6 md:w-6 cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <BsFillMoonFill
          className="h-4 w-4 md:h-6 md:w-6 cursor-pointer"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default ThemeChanger;
