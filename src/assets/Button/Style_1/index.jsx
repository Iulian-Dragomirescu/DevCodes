import React from "react";

import gaEventTracker from "../../../ReactGa";

function Button({ title, href }) {
  return (
    <button
      onClick={() => {
        gaEventTracker({ category: title });
      }}
    >
      <a className="buttonStyle cursor-pointer" href={href}>
        <span>{title}</span>
        <div className="liquid"></div>
      </a>
    </button>
  );
}

export default Button;
