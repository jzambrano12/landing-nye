/* eslint-disable import/no-unresolved */
import { useEffect, useMemo, useState } from "react";
import { Button } from "../../atoms/Button";

import { EffectCreative, EffectFlip, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-named-as-default
import Lightbox from "yet-another-react-lightbox";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Title } from "../../atoms/Title";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

export const Collections = () => {
  const [isDesktop, setIsDesktop] = useState(null);
  const [index, setIndex] = useState(-1);
  const { width } = useWindowSize();
  const slidesPerView = useMemo(() => (isDesktop ? 2 : 1), [isDesktop, width]);
  const modules = useMemo(
    () => (isDesktop ? [Navigation, EffectCreative] : [Navigation, EffectFlip]),
    [isDesktop, width]
  );

  useEffect(() => {
    if (width) {
      setIsDesktop(() => width >= 1024);
    }
  }, [width]);

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

  if (isDesktop === null) {
    return <span>Loading...</span>;
  }

  return (
    <section className="bg-lila py-[30px] px-4 lg:py-24 xl:px-56">
      <Title
        firstText="Conoce nuestros"
        secondText="Shiny Jeans"
        secondTextColor="text-[#fd346e]"
        description="When, while lovely valley teems with vapour around meand meridian sun
        strikes the upper impe"
      />
      <div className="mt-8 lg:max-h-[700px] lg:relative lg:flex lg:items-center lg:justify-center">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          navigation={true}
          creativeEffect={isDesktop}
          flipEffect={!isDesktop}
          spaceBetween={isDesktop && 5}
          modules={modules}
          slidesPerView={slidesPerView}
          slidesPerGroup={2}
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
        <div className="hidden lg:block lg:absolute lg:w-full lg:h-full">
          <div className="absolute -left-8 top-0">
            <div className="absolute top-0 left-0 text-5xl">🤩</div>
            <div className="absolute -left-8 top-28 text-5xl">⚡️</div>
            <div className="absolute -left-16 top-60 text-5xl">❤️</div>
          </div>
          <div className="absolute -right-8 top-0">
            <div className="absolute top-0 -left-16 text-5xl z-20">🤩</div>
            <div className="absolute -left-8 top-28 text-5xl">⚡️</div>
            <div className="absolute left-4 top-60 text-5xl">❤️</div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Button size="MD">Empezar Ahora</Button>
      </div>
    </section>
  );
};
