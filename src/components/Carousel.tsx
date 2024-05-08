import React, { useState, useEffect } from "react";

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

  return (
    <div>{isDarkMode ? <div>Modo oscuro</div> : <div>Modo claro</div>}</div>
  );
};

export default DarkModeText;
