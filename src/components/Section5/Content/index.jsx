import React from "react";

import gaEventTracker from "../../../ReactGa";

function Content() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="flex uppercase font-semibold text-4xl lg:text-6xl text-white tracking-wide">
        <span>Te-am</span>
        &nbsp;
        <span>
          Convins <span className="text-yellow-400">?</span>
        </span>
      </h1>
      <div className="text-[#999b9f] text-lg">
        <button
          type="button"
          onClick={() => gaEventTracker({ category: "Contact me Section" })}
        >
          <a
            className="text-yellow-400 underline font-semibold"
            href="tel:0765865718"
          >
            {" "}
            Contactează-ne
          </a>
        </button>
        &nbsp;și povestește-ne despre&nbsp;
        <span className="text-white font-semibold">
          proiectul tău<span className="text-yellow-400">&nbsp;!</span>
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-white font-semibold text-lg">
          Telefon:&nbsp;{" "}
          <button
            type="button"
            onClick={() => gaEventTracker({ category: "Telefon Section" })}
          >
            <a
              className="underline text-yellow-400 font-bold"
              href="tel:0765865718"
            >
              +40 765 865 718
            </a>
          </button>
        </div>
        <div className="text-white font-semibold text-lg">
          Email:&nbsp;{" "}
          <button
            type="button"
            onClick={() => gaEventTracker({ category: "Email Section" })}
          >
            <a
              className="underline text-yellow-400 font-bold"
              href="mailto:office@devcodes.ro"
            >
              office@devcodes.ro
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
