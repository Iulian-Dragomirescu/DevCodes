import React from "react";

import Effect from "../Effect";

import img from "../../../assets/images/pexels-photo-4342498.webp";

import gaEventTracker from "../../../ReactGa";

function Content() {
  return (
    <div className="flex flex-col gap-10">
      <Effect />

      <p className="text-[#999b9f] w-[95%]">
        Dacă cu toate{" "}
        <span className="text-white font-semibold">informațiile</span> de mai
        sus nu te-au convins, cel mai{" "}
        <span className="text-white font-semibold">ușor mod</span> este să ne{" "}
        <button
          type="button"
          onClick={() =>
            gaEventTracker({ category: "CUM LUCRAM NOI? -- Contact me" })
          }
        >
          <a
            href="#contact"
            className="text-yellow-400 cursor-pointer font-semibold underline"
          >
            contactați
          </a>
        </button>{" "}
        și să facem
        <span className="text-white font-semibold">cunoștință</span>. Relația cu
        clienții noștri este{" "}
        <span className="text-white font-semibold">foarte importantă</span> și
        încercăm foarte mult să avem o relație bună,{" "}
        <span className="text-white font-semibold">
          cu respect și de lungă durată
        </span>
        , așadar te așteptăm cu un{" "}
        <button
          type="button"
          onClick={() => gaEventTracker({ category: "CUM LUCRAM NOI? -- Tel" })}
        >
          <a
            href="tel:0765865718"
            className="text-yellow-400 cursor-pointer font-semibold underline"
          >
            telefon
          </a>
        </button>{" "}
        și vom raspunde <span className="text-white font-semibold">rapid</span>{" "}
        solicitărilor și{" "}
        <span className="text-white font-semibold">nevoile Dumneavoastră</span>.
      </p>

      <div className="flex gap-10">
        <img
          src={img}
          alt=""
          className="w-32 h-32 lg:w-44 lg:h-44 inline-block ring-2 p-1 rounded-full grayscale object-cover"
        />
        <div className="flex  flex-col gap-5">
          {[
            "High Performance",
            "Good Agency",
            "High Performance Service",
            "SEO Optimization",
            "Mobile friendly",
          ].map((e, index) => (
            <div class="flex space-x-3" key={index}>
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{e}</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {e}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
