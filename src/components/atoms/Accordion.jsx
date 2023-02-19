export const Accordion = ({
  children,
  title,
  indexOpened,
  setIndexOpened,
  index,
}) => {
  const isOpen = indexOpened === index;

  const handleOpen = () => {
    if (isOpen) setIndexOpened(null);
    else setIndexOpened(index);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleOpen}
        className="flex  items-center justify-between w-full py-2 px-4 bg-[#f6f6f6] rounded-lg"
      >
        <span className="font-bold">{title}</span>
        <div className="relative">
          <div
            className={`absolute right-0 w-[13px] h-[2px] ${
              isOpen ? "bg-black" : "bg-pink"
            } rounded-sm`}
          />
          {!isOpen && (
            <div className="absolute right-[5.2px] -top-[5.2px] w-[2px] h-[13px] bg-pink rounded-sm" />
          )}
        </div>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};
