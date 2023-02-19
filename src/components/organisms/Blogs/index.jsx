import { Button } from "../../atoms/Button";

export const Blogs = () => {
  return (
    <section className="py-[30px] px-4 bg-[#f5f5f5]">
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
      <div></div>
      <div className="mt-8 text-center">
        <Button variant="SECONDARY" size="LG">
          Ver todos
        </Button>
      </div>
    </section>
  );
};
