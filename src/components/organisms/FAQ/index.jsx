import { useState } from "react";
import { Accordion } from "../../atoms/Accordion";
import { Button } from "../../atoms/Button";

export const FAQ = () => {
  const [indexOpened, setIndexOpened] = useState(null);

  return (
    <section className="py-[30px] px-4 lg:py-24 xl:px-56">
      <div>
        <h2 className="text-[35px] font-black leading-[40px] text-center">
          Conoce nuestros <br />{" "}
          <span className="text-[#fd346e]">Shiny Jeans</span>
        </h2>
        <p className="text-[#70798b] text-sm text-center mt-2">
          When, while lovely valley teems with vapour around meand meridian sun
          strikes the upper impe
        </p>
      </div>
      <div className="flex flex-col mt-8 gap-4 lg:flex-row">
        <div className="flex flex-col gap-4 lg:flex-1">
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
          </Accordion>
        </div>
        <div className="flex flex-col gap-4 lg:flex-1">
          <Accordion
            index={3}
            title="Lorem ipsum"
            indexOpened={indexOpened}
            setIndexOpened={setIndexOpened}
          >
            <p className="text-sm text-[#4a4a4a] mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              non! Optio ducimus provident inventore delectus iusto quae numquam
            </p>
          </Accordion>
          <Accordion
            index={4}
            title="Lorem ipsum"
            indexOpened={indexOpened}
            setIndexOpened={setIndexOpened}
          >
            <p className="text-sm text-[#4a4a4a] mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              non! Optio ducimus provident inventore delectus iusto quae numquam
            </p>
          </Accordion>
          <Accordion
            index={5}
            title="Lorem ipsum"
            indexOpened={indexOpened}
            setIndexOpened={setIndexOpened}
          >
            <p className="text-sm text-[#4a4a4a] mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              non! Optio ducimus provident inventore delectus iusto quae numquam
            </p>
          </Accordion>
        </div>
      </div>
      <div className="text-center mt-8 lg:mt-14">
        <Button size="LG">Empezar ahora</Button>
      </div>
    </section>
  );
};
