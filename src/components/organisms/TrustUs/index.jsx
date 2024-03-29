import { Title } from "../../atoms/Title";

export const TrustUs = () => {
  return (
    <section className="pt-[30px] bg-[#14111a] lg:pt-24">
      <Title
        firstText="Conoce nuestros"
        secondText="Shiny Jeans"
        description="When, while lovely valley teems with vapour around meand meridian sun
        strikes the upper impe"
        firstTextColor="text-[#FFF]"
        secondTextColor="text-[#FFF]"
        descriptionColor="text-[#FFF]/80"
      />
      <div className="flex flex-col items-center mt-8 gap-12 lg:flex-row xl:px-56 lg:pb-20">
        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-pink rounded-full">
            <div className="flex items-center justify-center w-[45px] h-[45px] bg-black rounded-full">
              <span className="text-white font-bold">01</span>
            </div>
          </div>
          <span className="text-white my-4 text-xl font-medium">Launch</span>
          <p className="text-white/50 text-center text-sm px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            officia sed porro quidem deleniti, accusamus, libero suscipit
          </p>
        </div>
        <div className="flex flex-col items-center lg:mt-24">
          <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-pink rounded-full">
            <div className="flex items-center justify-center w-[45px] h-[45px] bg-black rounded-full">
              <span className="text-white font-bold">02</span>
            </div>
          </div>
          <span className="text-white my-4 text-xl font-medium">Launch</span>
          <p className="text-white/50 text-center text-sm px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            officia sed porro quidem deleniti, accusamus, libero suscipit
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-pink rounded-full">
            <div className="flex items-center justify-center w-[45px] h-[45px] bg-black rounded-full">
              <span className="text-white font-bold">03</span>
            </div>
          </div>
          <span className="text-white my-4 text-xl font-medium">Launch</span>
          <p className="text-white/50 text-center text-sm px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            officia sed porro quidem deleniti, accusamus, libero suscipit
          </p>
        </div>
        <div className="flex flex-col items-center lg:mt-24">
          <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-pink rounded-full">
            <div className="flex items-center justify-center w-[45px] h-[45px] bg-black rounded-full">
              <span className="text-white font-bold">04</span>
            </div>
          </div>
          <span className="text-white my-4 text-xl font-medium">Launch</span>
          <p className="text-white/50 text-center text-sm px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            officia sed porro quidem deleniti, accusamus, libero suscipit
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full bg-pink px-4 h-[80px] mt-16 text-white font-bold text-lg">
        Más de 35 años de experiencia 🤩
      </div>
    </section>
  );
};
