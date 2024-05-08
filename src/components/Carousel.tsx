import React, { useState, useEffect } from "react";

let DarkModeText: React.FC = () => {
  let [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <div>
      {isDark ? (
        <div>Modo oscuro activado</div>
      ) : (
        <div>Modo claro activado</div>
      )}
    </div>
  );
};

export default DarkModeText;
