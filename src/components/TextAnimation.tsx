import { TypeAnimation } from "react-type-animation";

let TextAnimation = () => {
  return (
    <div className=" w-full h-20 flex flex-col justify-center items-center my-20 font-Onest">
      <p className="text-5xl font-bold dark:text-white text-zinc-800 ">
        Hi,
        <TypeAnimation
          sequence={[" I'm Adrian", 4000, " What do you plan to do?", 1000]}
          deletionSpeed={40}
          speed={20}
          repeat={Infinity}
        />
      </p>
      <p className="text-4xl font-bold dark:text-zinc-500 text-zinc-700 my-5 hover:brightness-110 ">
        Front-end Developer
      </p>
    </div>
  );
};

export default TextAnimation;
