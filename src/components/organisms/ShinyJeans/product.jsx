export const Product = ({ src, handleOpen }) => {
  return (
    <button onClick={handleOpen}>
      <img src={src} alt="Shiny jean 1" />
      <span className="text-[9px] font-bold mt-2 leading-4">
        61636 - MACACÃO PREMIUM AZUL MAR
      </span>
    </button>
  );
};
