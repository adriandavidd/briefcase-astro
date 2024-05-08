import { useState } from "react";
import Icons from "./Icons";
import { Darkmode } from "./Toggle-Switch";

const darkmode = document.documentElement.toggleAttribute("dark");

const Carousel: React.FC = () => {
  return <div>{darkmode ? <div>a</div> : <div>b</div>}</div>;
};

export default Carousel;
