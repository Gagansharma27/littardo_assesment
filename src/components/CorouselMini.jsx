import React from "react";
import text from "../data/text.json";

function CorouselMini() {
  return (
    <>
      <div className="flex px-10 py-2 justify-between overflow-scroll text-sm scrollbar-custom max-w-[1440px] mx-auto">
        {text.items.map((items) => {
          return (
            <React.Fragment key={items.id}>
              <div className="flex flex-col flex-1 items-center justify-center h-fit overflow-visible gap-y-5 min-w-[100px]">
                <img src={items.image_link} alt="Item" className="item-image" />
                <p className=" w-3/4 text-center">{items.name}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default CorouselMini;
