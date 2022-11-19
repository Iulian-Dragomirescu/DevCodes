import React from "react";

function Content() {
  return (
    <div className="flex gap-10 flex-col">
      <div className="flex flex-col uppercase font-semibold text-5xl lg:text-6xl text-white tracking-wide text-start">
        <h1>Serviciile</h1>
        <h1>
          Noastre <span className="text-yellow-400">.</span>
        </h1>
      </div>
      <div className="lg:w-[90%]">
        <h2 className="text-[#999b9f]">
          Servicii de{" "}
          <span className="text-white font-semibold">web development</span>, seo
          optimization, creare site,{" "}
          <span className="text-white font-semibold">
            creare magazin online
          </span>
          . Asistență
          <span className="text-white font-semibold">
            &nbsp;gratuită 30
            <span className="text-yellow-400 font-semibold"> *</span>
          </span>{" "}
          de zile<span className="text-yellow-400 font-semibold">.</span>
        </h2>
      </div>
    </div>
  );
}

export default Content;
