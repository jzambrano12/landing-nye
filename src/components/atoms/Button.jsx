export const Button = ({ children, variant = "PRIMARY" }) => {
  const variantsFamily = {
    PRIMARY:
      "py-2 px-8 rounded-full bg-pink text-white text-[10px] shadow-xl shadow-pink/30",
    SECONDARY:
      "py-2 px-8 rounded-full bg-black text-white text-[10px] shadow-xl shadow-pink/30",
  };

  return <button className={`${variantsFamily[variant]}`}>{children}</button>;
};
