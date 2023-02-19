import { useEffect, useState } from "react";
import { Button } from "../../atoms/Button";

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
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
        <button className="flex flex-col items-center justify-between p-2 gap-1 w-10 bg-black rounded-md">
          <div className="w-full h-[2px] bg-white rounded-sm" />
          <div className="w-full h-[2px] bg-white rounded-sm" />
          <div className="w-full h-[2px] bg-white rounded-sm" />
          <div className="w-full h-[2px] bg-white rounded-sm" />
        </button>
      </div>

      <div className="flex gap-2">
        <Button variant="SECONDARY">Empezar Ahora</Button>
        <Button>Ingresar</Button>
      </div>
    </nav>
  );
};
