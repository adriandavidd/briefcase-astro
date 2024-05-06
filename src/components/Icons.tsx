const Icons: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-10 w-full h-30 bg-transparent p-5 rounded-md">
      <img src="/html5.svg" alt="github" className="w-20 h-20 contrast-75 " />

      <img src="/css3.svg" alt="css" className="w-20 h-20 contrast-75 " />
      <img src="/javascript.svg" alt="js" className="w-20 h-20 contrast-75 " />
      <img
        src="/typescript.svg"
        alt="ts"
        className="w-20 h-20 contrast-75 dark:"
      />
      <img
        src="/tailwindcss.svg"
        alt="tailwind"
        className="w-20 h-20 contrast-75 "
      />
      <img src="/react.svg" alt="react" className="w-20 h-20 contrast-75 " />
      <img src="/vite.svg" alt="vite" className="w-20 h-20 contrast-75 " />
      <img src="/nextdotjs.svg" alt="next" className="w-20 h-20 contrast-75 " />
      <img src="/astro.svg" alt="astro" className="w-20 h-20 contrast-75 " />
    </div>
  );
};

export default Icons;
