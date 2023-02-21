export const Button = ({ children, variant = "PRIMARY", size = "SM" }) => {
  const textSize = {
    SM: "text-[10px] md:text-sm",
    MD: "text-[14px] md:text-md",
    LG: "text-[16px] md:text-lg",
    Xl: "text-[18px] md:text-xl",
    XXL: "text-[22px] md:text-2xl",
  };

  const variantsFamily = {
    PRIMARY: `py-2 px-8 rounded-full bg-pink text-white ${textSize[size]} shadow-xl shadow-pink/30 md:px-6 lg:px-8 xl:font-bold`,
    SECONDARY: `py-2 px-8 rounded-full bg-black text-white ${textSize[size]} shadow-xl shadow-pink/30 md:px-6 lg:px-8 xl:font-bold`,
  };

  return <button className={`${variantsFamily[variant]}`}>{children}</button>;
};
