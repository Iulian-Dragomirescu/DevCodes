import React from "react";

import Button from "../../../assets/Button/Style_1";

function Content() {
  return (
    <div className="flex flex-col gap-7 lg:gap-10">
      <h1 className="text-white uppercase font-semibold text-5xl lg:text-7xl flex flex-col tracking-wide">
        <span>cum&nbsp;</span>
        <span>te putem&nbsp;</span>
        <span>
          ajuta <span className="border-b-4 border-yellow-400">noi</span>{" "}
          <span className="text-yellow-400">?</span>
        </span>
      </h1>
      <div>
        <h2 className="text-2xl text-white uppercase">
          Suntem o agentie de{" "}
          <span className="text-yellow-400 font-semibold">Web Development</span>{" "}
          cu servicii complete{" "}
          <span className="text-yellow-400 font-semibold">!</span>
        </h2>
      </div>
      <div>
        <p className="text-[#999b9f]">
          <span className="text-white font-semibold">
            Vă oferim servicii de web development
          </span>{" "}
          care să vă ajute să vă creati un{" "}
          <span className="text-white font-semibold">
            site web de calitate superioară
          </span>
          . Noi ne asigurăm că{" "}
          <span className="text-white font-semibold">toți clienții</span> noștri
          beneficiază de cele mai bune servicii și că piața online le oferă o
          amplasare solidă. Ne luăm timpul necesar pentru a înțelege nevoile{" "}
          <span className="text-white font-semibold">fiecăruia</span> dintre
          clienții noștri și astfel putem oferi soluții creative și
          personalizate pentru fiecare proiect în parte. De la{" "}
          <span className="text-white font-semibold">designul&nbsp;</span>
          site-ului până la{" "}
          <span className="text-white font-semibold">
            funcionalitățile
          </span>{" "}
          acestuia, noi visăm să depaşim așteptările{" "}
          <span className="text-white font-semibold">Dumneavoastră</span>.
        </p>
      </div>
      <div className="flex justify-center lg:justify-start">
        <Button title={"Contact"} href="#contact" />
      </div>
    </div>
  );
}

export default Content;
