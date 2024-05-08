import React, { useState, useEffect } from 'react';

const DarkModeText: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  return (
    <div>
      {isDark ? (
        // Renderizado para el modo oscuro
        <div>Modo oscuro activado</div>
      ) : (
        // Renderizado para el modo claro
        <div>Modo claro activado</div>
      )}
    </div>
  );
};

export default DarkModeText;