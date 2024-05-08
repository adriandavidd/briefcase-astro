import { useState, useEffect } from "react";
import Icons from "./Icons";

const DarkModeText: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    window.addEventListener("DOMContentLoaded", checkDarkMode);
    window.addEventListener("load", checkDarkMode);
    window.addEventListener("change", checkDarkMode);

    return () => {
      window.removeEventListener("DOMContentLoaded", checkDarkMode);
      window.removeEventListener("load", checkDarkMode);
      window.removeEventListener("change", checkDarkMode);
    };
  }, []);

  return <div className="w-full">{isDarkMode ? <Icons /> : <Icons />}</div>;
};

export default DarkModeText;
