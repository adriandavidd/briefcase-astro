import TextAnimation from "./TextAnimation";
import About from "./About";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <div className="">
      <TextAnimation></TextAnimation>
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
