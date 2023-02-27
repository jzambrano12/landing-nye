import { Button } from "../../atoms/Button";
import { Title } from "../../atoms/Title";

export const Testimonials = () => {
  return (
    <section className="px-4 py-[30px] lg:py-24 xl:px-56">
      <Title
        firstText="Conoce nuestros"
        secondText="Shiny Jeans"
        description="When, while lovely valley teems with vapour around meand meridian sun
        strikes the upper impe"
      />
      <div className="flex flex-col my-8 gap-6 lg:flex-row lg:flex-wrap">
        <div className="flex p-[4px] bg-white shadow-[0px_52px_54px_rgba(65,62,101,0.1)] rounded-xl lg:flex-1">
          <div className="flex">
            <img
              src="/images/contact-us.jpg"
              alt="Testimonial"
              className="w-[125px] h-[150px] rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-6 text-center">
            <p className="text-xs text-[#6a6a6a] line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto similique quidem vel sunt dawdaw dawda
            </p>
            <div className="flex flex-col mt-4">
              <span className="font-bold text-sm">Valeria Yepes</span>
              <span className="text-[10px] text-[#6a6a6a] mt-1">
                Dirección Creativa en TonyMoly
              </span>
            </div>
          </div>
        </div>
        <div className="flex p-[4px] bg-white shadow-[0px_52px_54px_rgba(65,62,101,0.1)] rounded-xl lg:flex-1">
          <div className="flex">
            <img
              src="/images/contact-us.jpg"
              alt="Testimonial"
              className="w-[125px] h-[150px] rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-6 text-center">
            <p className="text-xs text-[#6a6a6a] line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto similique quidem vel sunt dawdaw dawda
            </p>
            <div className="flex flex-col mt-4">
              <span className="font-bold text-sm">Valeria Yepes</span>
              <span className="text-[10px] text-[#6a6a6a] mt-1">
                Dirección Creativa en TonyMoly
              </span>
            </div>
          </div>
        </div>
        <div className="flex p-[4px] bg-white shadow-[0px_52px_54px_rgba(65,62,101,0.1)] rounded-xl lg:flex-1">
          <div className="flex">
            <img
              src="/images/contact-us.jpg"
              alt="Testimonial"
              className="w-[125px] h-[150px] rounded-xl"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center px-6 text-center">
            <p className="text-xs text-[#6a6a6a] line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto similique quidem vel sunt dawdaw dawda
            </p>
            <div className="flex flex-col mt-4">
              <span className="font-bold text-sm">Valeria Yepes</span>
              <span className="text-[10px] text-[#6a6a6a] mt-1">
                Dirección Creativa en TonyMoly
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button variant="SECONDARY" size="LG">
          Cargar más
        </Button>
      </div>
    </section>
  );
};
