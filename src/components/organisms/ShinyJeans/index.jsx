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

export const ShinyJeans = () => {
  const [index, setIndex] = useState(-1);

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
    <section className="py-[30px]">
      <div>
        <h2 className="text-[35px] font-black leading-[40px] text-center">
          Conoce nuestros <br />{" "}
          <span className="text-[#fd346e]">Shiny Jeans</span>
        </h2>
        <p className="text-[#70798b] text-sm text-center mt-2">
          When, while lovely valley teems with vapour around meand meridian sun
          strikes the upper impe
        </p>
      </div>
      <div className="w-screen flex flex-nowrap my-8 overflow-x-auto">
        <Swiper
          speed={5000}
          spaceBetween={10}
          slidesPerView={2}
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
        <Button size="MD">Empezar ahora</Button>
      </div>
    </section>
  );
};
