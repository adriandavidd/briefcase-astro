import { TypeAnimation } from "react-type-animation";
import About from "./About";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <div className="">
      <div className=" w-full h-20 flex flex-col justify-center items-center my-20 font-Onest">
        <p className="text-5xl font-bold dark:text-zinc-300 text-zinc-800">
          Hi,
          <TypeAnimation
            sequence={[" I'm Adrian", 4000, " I love programming", 1000]}
            deletionSpeed={40}
            speed={20}
            repeat={Infinity}
          />
        </p>
        <p className="text-4xl font-bold dark:text-zinc-500 text-zinc-700 my-5 hover:brightness-110">
          Front-end Developer
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Carousel></Carousel>
      </div>
      <div className="mt-11 w-full flex justify-center items-center bg-zinc-300  dark:bg-[#0a0a0a]">
        <About></About>
      </div>
    </div>
  );
};

export default Home;
