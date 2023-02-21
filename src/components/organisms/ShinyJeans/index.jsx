/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Product } from "./product";

// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "yet-another-react-lightbox/styles.css";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Title } from "../../atoms/Title";

export const ShinyJeans = () => {
  const [index, setIndex] = useState(-1);
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  const slides = [
    "/images/shiny-1.webp",
    "/images/shiny-1.webp",
    "/images/shiny-1.webp",
    "/images/shiny-1.webp",
    "/images/shiny-1.webp",
    "/images/shiny-1.webp",
    "/images/shiny-1.webp",
  ];

  const handleOpen = (incomingIndex) => {
    setIndex(incomingIndex);
  };

  return (
    <section className="py-[30px] lg:py-24">
      <Title
        firstText="Conoce nuestros"
        secondText="Shiny Jeans"
        description="When, while lovely valley teems with vapour around meand meridian sun
        strikes the upper impe"
      />
      <div className="w-screen flex flex-nowrap my-8 overflow-x-auto">
        <Swiper
          speed={5000}
          spaceBetween={!isDesktop ? 10 : 50}
          slidesPerView={!isDesktop ? 2 : 4}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide className="flex flex-col text-center" key={index}>
              <Product src={slide} handleOpen={() => handleOpen(index)} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
      <div className="text-center">
        <Button size={isDesktop ? "LG" : "MD"}>Empezar ahora</Button>
      </div>
    </section>
  );
};
