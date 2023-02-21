export const Title = ({
  firstText,
  secondText,
  secondTextColor = "#fd346e",
  description,
  descriptionColor = "#70798b",
}) => {
  return (
    <div>
      <h2 className="text-[35px] font-black leading-[40px] text-center lg:text-5xl">
        {firstText} <br />{" "}
        <span className={`text-[${secondTextColor}]`}>{secondText}</span>
      </h2>
      <p
        className={`text-[${descriptionColor}] text-sm text-center mt-2 lg:text-base`}
      >
        {description}
      </p>
    </div>
  );
};
