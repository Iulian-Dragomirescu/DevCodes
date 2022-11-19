import React from "react";

function Box({ number, icon, title }) {
  return (
    <div className="bg-[#1c1e22] rounded-md flex flex-col justify-between p-3 lg:p-8 ease-in-out duration-300 hover:bg-[#ffaa17] lg:w-[15rem] lg:h-[13rem] w-[10rem] h-[12rem] shadow-md group">
      <div className="flex justify-between items-center">
        <span className="text-[#2b2d30] font-bold text-5xl">{number}</span>
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[#ffaa17] group-hover:stroke-[#2b2d30] group-hover:ease-in-out group-hover:duration-300 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
        >
          {icon.map((e, index) => (
            <React.Fragment key={index}>{e}</React.Fragment>
          ))}
        </svg>
      </div>

      <div>
        <span className="text-white group-hover:text-[#2b2d30] font-bold text-xl uppercase">
          {title}
        </span>
      </div>
    </div>
  );
}

export default Box;
