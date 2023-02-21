import { useEffect, useState } from "react";
import { Button } from "../../atoms/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all fixed top-0 bg-[#f3effe]/70 p-4 flex w-full items-center justify-between z-20 ${
        scrollPosition >= 8 && "backdrop-blur-lg"
      }`}
    >
      <div className="flex flex-1">
        <button
          onClick={handleOpen}
          className={`flex flex-col items-center justify-between p-2 w-10 rounded-md transition-all ${
            isOpen ? "transparent gap-0 translate-y-1" : "bg-black gap-1"
          }`}
        >
          <div
            className={`w-full h-[2px] rounded-sm transition-all ${
              isOpen ? "bg-black rotate-45" : "bg-white"
            }`}
          />
          <div
            className={`w-full h-[2px] rounded-sm transition-all ${
              isOpen ? "bg-black -rotate-45 -translate-y-[2px]" : "bg-white"
            }`}
          />
          <div
            className={`w-full h-[2px] bg-white rounded-sm ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`w-full h-[2px] bg-white rounded-sm ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </button>
      </div>

      <div className="flex gap-2">
        <Button variant="SECONDARY">Empezar Ahora</Button>
        <Button>Ingresar</Button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed p-4 top-16 left-0 bg-white w-full shadow-2xl transition-all ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="font-bold">CONFIGURACIONES</span>
        <ul className="mt-4 flex flex-col gap-3">
          <li className="font-medium text-sm">Colección</li>
          <li className="font-medium text-sm">Beneficios</li>
          <li className="font-medium text-sm">Blogs</li>
          <li className="font-medium text-sm">Testimonios</li>
          <li className="font-medium text-sm">Precios</li>
        </ul>
        <button className="mt-4 bg-black text-white text-xs font-bold w-full py-2 rounded-full">
          VISITAR WWW.NYEJEANS.COM
        </button>
      </div>
    </nav>
  );
};
