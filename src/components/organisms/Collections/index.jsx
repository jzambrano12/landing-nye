/* eslint-disable import/no-unresolved */
import { Button } from "../../atoms/Button";

import { EffectFlip, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Collections = () => {
  return (
    <section className="bg-lila py-[30px] px-4">
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
          <SwiperSlide>
            <img
              src="/images/shiny-1.webp"
              className="w-full rounded-xl"
              alt="Collection #1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/shiny-1.webp"
              className="w-full rounded-xl"
              alt="Collection #1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/shiny-1.webp"
              className="w-full rounded-xl"
              alt="Collection #1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/shiny-1.webp"
              className="w-full rounded-xl"
              alt="Collection #1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/shiny-1.webp"
              className="w-full rounded-xl"
              alt="Collection #1"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center mt-6">
        <Button size="MD">Empezar Ahora</Button>
      </div>
    </section>
  );
};
