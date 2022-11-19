import React from "react";

import icon from "../../../assets/icons/swirly-scribbled-arrow-svgrepo-com.svg";

function Effect() {
  return (
    <div className="absolute z-[-2] -top-[7rem] w-44 right-[12%]">
      <img src={icon} alt="icon" className="icon-color" />
    </div>
  );
}

export default Effect;
