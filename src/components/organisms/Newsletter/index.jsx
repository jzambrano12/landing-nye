export const NewsLetter = () => {
  return (
    <section className="py-[30px] px-4 bg-pink  xl:px-32">
      <div>
        <h2 className="text-[35px] text-white font-black leading-[40px] text-center">
          Unete a nuestra <br /> Comunidad
        </h2>
        <p className="text-white text-sm text-center mt-2">
          When, while lovely valley teems with vapour around meand meridian sun
          strikes the upper impe
        </p>
      </div>
      <form className="mt-8">
        <div className="flex justify-between w-full bg-white py-1 pl-4 pr-1 rounded-full">
          <input
            className="flex flex-1 mr-2 outline-none text-xs "
            placeholder="Enter your email"
            type="email"
          />
          <button className="py-2 px-4 bg-black rounded-full text-white text-xs">
            Subscribe Now
          </button>
        </div>
      </form>
    </section>
  );
};
