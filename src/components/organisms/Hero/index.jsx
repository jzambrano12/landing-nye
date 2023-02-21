import { PlayIcon } from "../../../assets/icons/play";
import { Button } from "../../atoms/Button";
import { SocialIconsFloating } from "../../molecules/SocialIconsFloating";

export const Hero = () => {
  return (
    <section className="w-screen min-h-screen bg-[#f3effe] pt-24 pb-10 px-4 md:flex md:items-center  xl:px-32">
      <div className="md:flex md:flex-col md:flex-1">
        <div>
          <h1 className="font-black text-[35px] leading-[42px] text-center md:text-left md:text-5xl md:leading-[50px] lg:text-6xl lg:leading-[70px]">
            ¡Los Mejores Jeans <br />{" "}
            <span className="md:text-purple">Colombianos</span> <br />
            Para Ti!
          </h1>
          <p className="mt-4 text-center text-[#70798b] text-sm md:text-left md:text-md lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            error ipsa tempora sunt temporibus, facilis obcaecati dolores! Amet
            quo, vitae autem dolore cum, doloremque eaque voluptates aliquid
            excepturi, facere tenetur?
          </p>
        </div>
        <div className="flex items-center justify-between mt-6 md:justify-start md:gap-4">
          <Button size="MD">Empezar Ahora</Button>
          <div className="flex items-center justify-center relative p-4">
            <div className="absolute w-[50px] h-[50px] bg-white rounded-full animate-ping" />
            <div className="z-10 flex items-center justify-center w-[50px] h-[50px] bg-[#5f28d3] rounded-full">
              <PlayIcon className="w-6 h-6" />
            </div>
          </div>
          <span className="font-bold text-sm">¿Cómo funciona?</span>
        </div>
      </div>
      <div className="relative flex justify-center mt-6 md:mt-0 md:justify-end md:w-[48%] xl:w-7/12">
        <img src="/images/hero.webp" alt="Hero img" className="w-10/12" />
        <SocialIconsFloating />
      </div>
    </section>
  );
};
