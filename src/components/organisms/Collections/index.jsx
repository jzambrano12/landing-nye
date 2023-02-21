/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { Button } from "../../atoms/Button";

import { EffectFlip, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

export const Collections = () => {
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
    <section className="bg-lila py-[30px] px-4  xl:px-32">
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
      <div className="mt-8">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <button onClick={() => handleOpen(index)} className="w-full">
                <img
                  src={slide}
                  className="w-full rounded-xl"
                  alt="Collection #1"
                />
              </button>
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
      <div className="text-center mt-6">
        <Button size="MD">Empezar Ahora</Button>
      </div>
    </section>
  );
};
