import React, { useState } from "react";

import { motion } from "framer-motion";

import gaEventTracker from "../../../ReactGa";

function Answers() {
  const [state, setState] = useState(0);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-semibold text-6xl text-white tracking-wide uppercase">
        Cum lucram noi <span className="text-yellow-400">?</span>
      </h1>
      <div className="grid place-items-center grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-2 cursor-pointer text-white">
        <div
          onClick={() => {
            setState(0);
            gaEventTracker({ category: "Analiza" });
          }}
          className={`ease-in-out duration-300 py-3 px-5 whitespace-nowrap answers-animation relative rounded-md col-span-1 lg:col-span-1 w-full mr-[0.65rem] lg:mr-0 ${
            state === 0 && "answers-animation-on text-black"
          }`}
        >
          <p className="relative z-10">Analiză</p>
        </div>
        <div
          onClick={() => {
            setState(1);
            gaEventTracker({ category: "Dezvoltare Web" });
          }}
          className={`ease-in-out duration-300 py-3 px-5 whitespace-nowrap answers-animation relative rounded-md col-span-1 lg:col-span-1 w-full ml-[0.65rem] lg:ml-0 ${
            state === 1 && "answers-animation-on text-black"
          }`}
        >
          <p className="relative z-10">Dezvoltare Web</p>
        </div>
        <div
          onClick={() => {
            setState(2);
            gaEventTracker({ category: "SEO si lansare" });
          }}
          className={`ease-in-out duration-300 py-3 px-5 whitespace-nowrap answers-animation relative rounded-md col-span-3 lg:col-span-1 w-full ${
            state === 2 && "answers-animation-on text-black"
          }`}
        >
          <p className="relative z-10">SEO si lansare</p>
        </div>
      </div>
      <div className="text-[#999b9f] ">
        {state === 0 && (
          <motion.div
            initial={{ y: "55px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            Încercăm să{" "}
            <span className="text-white font-semibold">
              întelegem și să analizăm
            </span>{" "}
            împreună cu echipa ta cele mai{" "}
            <span className="text-white font-semibold">
              eficiente soluții de dezvoltare
            </span>{" "}
            pentru viitorul{" "}
            <span className="text-white font-semibold">tău</span> website.
            Stabilim <span className="text-white font-semibold">împreună</span>{" "}
            cum va arata viitorul tău website și{" "}
            <span className="text-white font-semibold">
              funcționalitățile acestuia
            </span>
            .
          </motion.div>
        )}
        {state === 1 && (
          <motion.div
            initial={{ y: "55px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            Ne apucăm de partea{" "}
            <span className="text-white font-semibold">tehnică</span> a
            website-ului,{" "}
            <span className="text-white font-semibold">programarea lui</span>,
            și dezvoltarea noilor funcții pe care acesta le va avea. După
            terminarea lui, încep{" "}
            <span className="text-white font-semibold">verificările</span>{" "}
            pentru a nu exista{" "}
            <span className="text-white font-semibold">
              bug-uri sau alte erori
            </span>
            .
          </motion.div>
        )}
        {state === 2 && (
          <motion.div
            initial={{ y: "55px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            După <span className="text-white font-semibold">finalizarea</span>{" "}
            tuturor etapelor{" "}
            <span className="text-white font-semibold">tehnice</span>, începem
            să facem <span className="text-white font-semibold">research</span>{" "}
            pentru cuvintele tale cheie, ceea ce te va amplasa cat mai sus în{" "}
            <span className="text-white font-semibold">
              căutarile de pe Google
            </span>
            . Iar ultimul pas este cel în care{" "}
            <span className="text-white font-semibold">
              website-ul tău este lansat
            </span>
            .
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Answers;
