import { Button } from "../../atoms/Button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 bg-[#f3effe]/70 p-4 flex w-full items-center justify-between z-20 backdrop-blur-lg">
      <div className="flex flex-1">
        <div className="flex flex-col items-center justify-between p-2 gap-1 w-10 bg-black rounded-md">
          <div className="w-full h-[2px] bg-white rounded-sm" />
          <div className="w-full h-[2px] bg-white rounded-sm" />
          <div className="w-full h-[2px] bg-white rounded-sm" />
          <div className="w-full h-[2px] bg-white rounded-sm" />
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="SECONDARY">Empezar Ahora</Button>
        <Button>Ingresar</Button>
      </div>
    </div>
  );
};
