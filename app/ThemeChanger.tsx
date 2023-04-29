"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>

      {currentTheme === "dark" ? (
        <BsFillSunFill
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="h-8 w-8 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
