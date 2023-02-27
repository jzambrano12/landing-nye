import { useRef, useState } from "react";
import { PlayIcon } from "../../../assets/icons/play";
import { countries } from "../../../data/countries";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { Title } from "../../atoms/Title";

export const ContactUs = () => {
  const listRef = useRef();
  const [showList, setShowList] = useState(false);
  const [countrySelected, setCountrySelected] = useState(countries[0]);

  useOnClickOutside(listRef, () => setShowList(false));

  const handleShowList = () => {
    setShowList((prevState) => !prevState);
  };

  const handleSelect = (country) => {
    setCountrySelected(country);
    handleShowList();
  };

  return (
    <section className="flex flex-col bg-[#fff5f8] py-[30px] px-4 lg:py-24 xl:px-56">
      <Title
        firstText="Conoce nuestros"
        secondText="Shiny Jeans"
        secondTextColor="text-[#000]"
        description="When, while lovely valley teems with vapour around meand meridian sun
        strikes the upper impe"
      />
      <div className="lg:flex lg:items-stretch lg:justify-center lg:mt-16 lg:gap-6">
        {/* Contact us image */}
        <div className="relative mt-8 mb-4 flex flex-1 items-center justify-center lg:mt-0 lg:mb-0 lg:w-1/2 lg:flex-1">
          <img
            src="/images/contact-us.jpg"
            alt="Contact us"
            className="rounded-xl max-h-[600px] w-full"
          />
          <div className="absolute bg-white/30 w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <PlayIcon className="w-14 h-14 transition-all hover:w-18 hover:h-18 z-10" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 xl:px-8 lg:flex lg:flex-col lg:flex-1 lg:justify-center xl:max-w-[560px]">
          <div>
            <h3 className="text-xl font-black mb-1 lg:text-3xl">
              ¡Empecemos ahora!
            </h3>
            <p className="text-xs font-light text-[#6a6a6a] lg:text-base lg:mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              accusantium nesciunt libero hic animi optio. Error itaque unde
            </p>
          </div>
          <form className="mt-4">
            <div className="flex flex-col">
              <label
                htmlFor="full-name"
                className="font-bold text-xs mb-1 lg:text-base"
              >
                Nombre completo
              </label>
              <input
                id="full-name"
                placeholder="Camila Restrepo"
                className="h-[35px] bg-[#f5f8fa] font-light text-[#6c6c6c] text-sm rounded-full px-4 outline-none placeholder:text-[#6c6c6c]/30 lg:text-base xl:h-[50px]"
              />
            </div>
            <div className="relative flex flex-col my-4 xl:my-6">
              <label
                htmlFor="email"
                className="font-bold text-xs mb-1 lg:text-base"
              >
                Teléfono
              </label>
              <div className="flex items-center relative w-full h-[35px] bg-[#f5f8fa] rounded-full px-4 xl:h-[50px]">
                <button
                  type="button"
                  onClick={handleShowList}
                  className="top-[6px] left-4 flex items-center gap-2"
                >
                  <div className="">{countrySelected.flag}</div>
                  <span className="text-[#5a5a5a] font-medium text-sm lg:text-base">
                    {countrySelected.value}
                  </span>
                </button>
                <input
                  id="email"
                  type="phone"
                  placeholder="111 111 1111"
                  className="flex flex-1 w-full bg-transparent font-light text-[#6c6c6c] text-sm pl-2 pr-4 outline-none placeholder:text-[#6c6c6c]/30 lg:text-base lg:pl-3"
                />
              </div>
              {showList && (
                <div
                  ref={listRef}
                  className="flex flex-col gap-2 absolute w-full top-16 max-h-52 overflow-auto left-0 bg-black/95 shadow-2xl shadow-pink/30 p-4 rounded-lg"
                >
                  {countries.map((country, index) => (
                    <button
                      type="button"
                      className="flex items-center gap-1"
                      key={index}
                      onClick={() => handleSelect(country)}
                    >
                      <span>{country.flag}</span>
                      <span className="text-white text-xs">
                        {country.name} ({country.value})
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-bold text-xs mb-1 lg:text-base"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="crestrepo@nyejeans.com"
                className="h-[35px] bg-[#f5f8fa] font-light text-[#6c6c6c] text-sm rounded-full px-4 outline-none placeholder:text-[#6c6c6c]/30 lg:text-base xl:h-[50px]"
              />
            </div>
            <button className="w-full h-[45px] text-lg text-white bg-pink rounded-full mt-4 lg:mt-8 xl:h-[70px] xl:text-xl xl:tracking-wide">
              REGISTRARME
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
