import React from "react";
import text from "../data/text.json";

function Header() {
  return (
    <>
      <div className="header flex gap-3 px-10 py-2 justify-between overflow-scroll text-sm scrollbar-custom max-w-[1440px] mx-auto my-4">
        {text.items.map((items, index) => {
          return (
            <React.Fragment key={items.id}>
              <span className="font-semibold min-w-fit">{items.name}</span>
              {index !== text.items.length - 1 && <span>|</span>}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default Header;
