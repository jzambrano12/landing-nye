export const Product = ({ src, handleOpen }) => {
  return (
    <button onClick={handleOpen}>
      <img src={src} alt="Shiny jean 1" className="mb-2 md:w-full md:mb-3" />
      <span className="text-[9px] font-bold leading-4 lg:text-sm">
        61636 - MACACÃO PREMIUM AZUL MAR
      </span>
    </button>
  );
};
