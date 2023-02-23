/* eslint-disable import/no-unresolved */
import { useMemo, useState } from "react";
import { Button } from "../../atoms/Button";

import { EffectFlip, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-named-as-default
import Lightbox from "yet-another-react-lightbox";
import { useWindowSize } from "../../../hooks/useWindowSize";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

export const Collections = () => {
  const [index, setIndex] = useState(-1);
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const modules = useMemo(
    () => (isDesktop ? [Navigation] : [Navigation, EffectFlip]),
    [isDesktop]
  );

  console.log({ modules });

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
    <section className="bg-lila py-[30px] px-4 xl:px-32">
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
      <div className="mt-8 lg:max-h-[700px]">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          navigation={true}
          spaceBetween={5}
          modules={modules}
          className="mySwiper"
          slidesPerView={isDesktop ? 2 : 1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <button onClick={() => handleOpen(index)} className="w-full">
                <div className="bg-white p-2 lg:p-4 rounded-3xl">
                  <img
                    src={slide}
                    className="w-full rounded-xl lg:max-h-[650px]"
                    alt="Collection #1"
                  />
                </div>
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
