import React from "react";

function CornerTop() {
  return (
    <div className="absolute p-5  lg:block hidden">
      <span className="absolute w-[6rem] h-[1.2rem] rounded-full bg-[#ffaa17]"></span>
      <span className="absolute w-[6rem] h-[1.2rem] rounded-full bg-[#ffaa17] rotate-90 top-[3.8rem] left-[-1.2rem]"></span>
    </div>
  );
}

function CornerBottom() {
  return (
    <div className="absolute mb-5 p-5 bottom-0 right-[6rem] lg:block hidden">
      <span className="absolute w-[6rem] h-[1.2rem] rounded-full bg-[#ffaa17] -rotate-90 top-[-1.2rem] right-[-7.2rem]"></span>
      <span className="absolute w-[6rem] h-[1.2rem] rounded-full bg-[#ffaa17]"></span>
    </div>
  );
}

export { CornerTop, CornerBottom };
