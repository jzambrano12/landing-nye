import CountUp from "react-countup";

export const Numbers = () => {
  return (
    <section className="flex flex-col bg-black py-8 gap-8">
      <div className="flex flex-col items-center">
        <span className="font-bold text-5xl text-white">
          <CountUp end={35} />+
        </span>
        <span className="text-white text-sm font-light mt-2">
          PAÍSES EXPORTAMOS
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-5xl text-white">
          <CountUp end={35} delay={0.2} />+
        </span>
        <span className="text-white text-sm font-light mt-2">
          PAÍSES EXPORTAMOS
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-5xl text-white">
          <CountUp end={35} delay={0.4} />+
        </span>
        <span className="text-white text-sm font-light mt-2">
          PAÍSES EXPORTAMOS
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-5xl text-white">
          <CountUp end={35} delay={0.6} />+
        </span>
        <span className="text-white text-sm font-light mt-2">
          PAÍSES EXPORTAMOS
        </span>
      </div>
    </section>
  );
};
