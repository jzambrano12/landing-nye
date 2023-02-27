import { useState } from "react";
import { Accordion } from "../../atoms/Accordion";
import { Title } from "../../atoms/Title";

export const Benefits = () => {
  const [indexOpened, setIndexOpened] = useState(null);

  return (
    <section className="py-[30px] px-4 lg:flex lg:gap-24 lg:py-24 xl:px-56">
      <div className="lg:flex lg:flex-col lg:w-1/2">
        <Title
          firstText="Conoce nuestros"
          secondText="Shiny Jeans"
          secondTextColor="text-[#fd346e]"
          description="When, while lovely valley teems with vapour around meand meridian sun
        strikes the upper impe"
          alignCenter={false}
        />
        <div className="flex flex-col mt-8 gap-4">
          <Accordion
            index={0}
            title="Lorem ipsum"
            indexOpened={indexOpened}
            setIndexOpened={setIndexOpened}
          >
            <p className="text-sm text-[#4a4a4a] mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              non! Optio ducimus provident inventore delectus iusto quae numquam
            </p>
            <img
              src="/images/contact-us.jpg"
              alt="Accordion img"
              className="rounded-xl"
            />
          </Accordion>
          <Accordion
            index={1}
            title="Lorem ipsum"
            indexOpened={indexOpened}
            setIndexOpened={setIndexOpened}
          >
            <p className="text-sm text-[#4a4a4a] mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              non! Optio ducimus provident inventore delectus iusto quae numquam
            </p>
            <img
              src="/images/contact-us.jpg"
              alt="Accordion img"
              className="rounded-xl"
            />
          </Accordion>
          <Accordion
            index={2}
            title="Lorem ipsum"
            indexOpened={indexOpened}
            setIndexOpened={setIndexOpened}
          >
            <p className="text-sm text-[#4a4a4a] mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              non! Optio ducimus provident inventore delectus iusto quae numquam
            </p>
            <img
              src="/images/contact-us.jpg"
              alt="Accordion img"
              className="rounded-xl"
            />
          </Accordion>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1">
        <img
          src="/images/contact-us.jpg"
          alt="Benefits"
          className="rounded-2xl lg:max-w-[670px] lg:max-h-[870px]"
        />
      </div>
    </section>
  );
};
