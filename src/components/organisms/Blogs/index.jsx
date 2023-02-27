import { Button } from "../../atoms/Button";
import { Title } from "../../atoms/Title";

export const Blogs = () => {
  return (
    <section className="py-[30px] px-4 bg-[#f5f5f5] lg:py-24 xl:px-56">
      <Title
        firstText="Conoce nuestros"
        secondText="Shiny Jeans"
        secondTextColor="text-[#fd346e]"
        description="When, while lovely valley teems with vapour around meand meridian sun
        strikes the upper impe"
      />
      <div className="flex flex-col mt-8 gap-6 lg:mt-14 lg:flex-row">
        <div>
          <div
            className="relative w-full h-[190px] rounded-t-xl"
            style={{
              backgroundImage: `url("/images/contact-us.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-4 left-4 text-[#64ff00] bg-white rounded-full text-xs py-1 px-4">
              TENDENCIAS
            </div>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-b-xl">
            <span className="text-[#525252] text-[9px] font-light">
              MARZO 26, 2023
            </span>
            <span className="text-md font-bold leading-5 my-2">
              Como conseguir un maquillaje de noche para una boda
            </span>
            <span className="line-clamp-2 text-[#8d8d8d] text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              perferendis dwad aw daw dw adwadawodkwoapd wadopwkodpkwa
              dwaodkwaod wadwakdowadwad
            </span>
          </div>
        </div>
        <div>
          <div
            className="relative w-full h-[190px] rounded-t-xl"
            style={{
              backgroundImage: `url("/images/contact-us.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-4 left-4 text-[#64ff00] bg-white rounded-full text-xs py-1 px-4">
              TENDENCIAS
            </div>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-b-xl">
            <span className="text-[#525252] text-[9px] font-light">
              MARZO 26, 2023
            </span>
            <span className="text-md font-bold leading-5 my-2">
              Como conseguir un maquillaje de noche para una boda
            </span>
            <span className="line-clamp-2 text-[#8d8d8d] text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              perferendis dwad aw daw dw adwadawodkwoapd wadopwkodpkwa
              dwaodkwaod wadwakdowadwad
            </span>
          </div>
        </div>
        <div>
          <div
            className="relative w-full h-[190px] rounded-t-xl"
            style={{
              backgroundImage: `url("/images/contact-us.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-4 left-4 text-[#64ff00] bg-white rounded-full text-xs py-1 px-4">
              TENDENCIAS
            </div>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-b-xl">
            <span className="text-[#525252] text-[9px] font-light">
              MARZO 26, 2023
            </span>
            <span className="text-md font-bold leading-5 my-2">
              Como conseguir un maquillaje de noche para una boda
            </span>
            <span className="line-clamp-2 text-[#8d8d8d] text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              perferendis dwad aw daw dw adwadawodkwoapd wadopwkodpkwa
              dwaodkwaod wadwakdowadwad
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button variant="SECONDARY" size="LG">
          Ver todos
        </Button>
      </div>
    </section>
  );
};
