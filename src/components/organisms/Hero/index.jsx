import { PlayIcon } from "../../../assets/icons/play";
import { Button } from "../../atoms/Button";

export const Hero = () => {
  return (
    <section className="w-screen h-screen bg-[#f3effe] pt-24 px-4">
      <div>
        <div>
          <h1 className="font-black text-[35px] leading-[45px] text-center">
            ¡Los Mejores Jeans <br /> Colombianos <br />
            Para Ti!
          </h1>
          <p className="mt-4 text-center text-[#70798b] text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            error ipsa tempora sunt temporibus, facilis obcaecati dolores! Amet
            quo, vitae autem dolore cum, doloremque eaque voluptates aliquid
            excepturi, facere tenetur?
          </p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <Button>Empezar Ahora</Button>
          <div className="flex items-center justify-center relative p-4">
            <div className="absolute w-[50px] h-[50px] bg-white rounded-full animate-ping" />
            <div className="z-10 flex items-center justify-center w-[50px] h-[50px] bg-[#5f28d3] rounded-full">
              <PlayIcon />
            </div>
          </div>
          <span className="font-bold text-sm">¿Cómo funciona?</span>
        </div>
      </div>
      <div></div>
    </section>
  );
};
