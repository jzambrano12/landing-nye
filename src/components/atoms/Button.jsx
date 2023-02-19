export const Button = ({ children, variant = "PRIMARY", size = "SM" }) => {
  const textSize = {
    SM: "text-[10px]",
    MD: "text-md",
    LG: "text-lg",
    Xl: "text-xl",
    XXL: "text-2xl",
  };

  const variantsFamily = {
    PRIMARY: `py-2 px-8 rounded-full bg-pink text-white ${textSize[size]} shadow-xl shadow-pink/30`,
    SECONDARY: `py-2 px-8 rounded-full bg-black text-white ${textSize[size]} shadow-xl shadow-pink/30`,
  };

  return <button className={`${variantsFamily[variant]}`}>{children}</button>;
};
