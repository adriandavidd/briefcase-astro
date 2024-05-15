import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div>
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
      ></Carousel>
    </div>
  );
};

export default CarouselComponent;
