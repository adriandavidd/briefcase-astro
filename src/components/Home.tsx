import { TypeAnimation } from "react-type-animation";
import About from "./About";

const Home = () => {
  return (
    <div className="">
      <div className=" w-full h-20 flex flex-col justify-center items-center my-20 font-Onest">
        <p className="text-5xl font-bold dark:text-zinc-400 text-zinc-600">
          Hi,
          <TypeAnimation
            sequence={[" I'm Adrian", 4000, " I love programming", 1000]}
            deletionSpeed={40}
            speed={20}
            repeat={Infinity}
          />
        </p>
        <p className="text-4xl font-bold dark:text-zinc-600 text-zinc-500 my-5 hover:brightness-110">
          Front-end Developer
        </p>
      </div>
      <div className="my-40 h-40 w-full flex justify-center items-center">
        <About></About>
      </div>
    </div>
  );
};

export default Home;
