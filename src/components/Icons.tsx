const Icons: React.FC = () => {
  const images = [
    "/html5.svg",
    "/css3.svg",
    "/javascript.svg",
    "/typescript.svg",
    "/tailwindcss.svg",
    "/react.svg",
    "/vite.svg",
    "/nextdotjs.svg",
    "/astro.svg",
  ];

  return (
    <>
      {images.map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt=""
            className="h-24 w-24 contrast-75 dark:invert mx-36 "
          />
        </div>
      ))}
    </>
  );
};

export default Icons;
