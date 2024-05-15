import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const IconsWhite: React.FC = () => {
  const images = [
    "/htmlWhite.svg",
    "/css3.svg",
    "/javascript.svg",
    "/typescript.svg",
    "/tailwindcss.svg",
    "/react.svg",
    "/vite.svg",
    "/nextdotjs.svg",
    "/astro.svg",
    "/html5.svg",
    "/css3.svg",
    "/javascript.svg",
    "/typescript.svg",
    "/tailwindcss.svg",
    "/react.svg",
    "/vite.svg",
    "/nextdotjs.svg",
    "/astro.svg",
    "/html5.svg",
    "/css3.svg",
    "/javascript.svg",
    "/typescript.svg",
    "/tailwindcss.svg",
    "/react.svg",
    "/vite.svg",
    "/nextdotjs.svg",
    "/astro.svg",
    "/html5.svg",
    "/css3.svg",
    "/javascript.svg",
    "/typescript.svg",
    "/tailwindcss.svg",
    "/react.svg",
    "/vite.svg",
    "/nextdotjs.svg",
    "/astro.svg",
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
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        transitionTime={700}
        autoFocus={true}
        stopOnHover={false}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt="" className="w-full h-20 contrast-75" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default IconsWhite;
