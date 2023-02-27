export const Title = ({
  firstText,
  firstTextColor = "text-[#000]",
  secondText,
  secondTextColor = "text-[#fd346e]",
  description,
  descriptionColor = "text-[#70798b]",
  alignCenter = true,
}) => {
  return (
    <div>
      <h2
        className={`text-[35px] font-black leading-[40px] ${firstTextColor} ${
          alignCenter ? "text-center" : "text-left"
        } lg:text-5xl`}
      >
        {firstText} <br />{" "}
        <span className={`${secondTextColor}`}>{secondText}</span>
      </h2>
      <p
        className={`${descriptionColor} text-sm ${
          alignCenter ? "text-center" : "text-left"
        } mt-2 lg:text-base`}
      >
        {description}
      </p>
    </div>
  );
};
