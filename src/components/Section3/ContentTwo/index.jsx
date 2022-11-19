import React from "react";

import Effect from "../Effect";

function ContentTwo() {
  return (
    <div className="relative flex flex-col gap-10">
      <Effect />
      <p className="text-[#999b9f]">
        <span className="text-white font-semibold">Noi</span>, la echipa de
        dezvoltare web,{" "}
        <span className="text-white font-semibold">
          ne concentrăm pe creearea&nbsp;
        </span>
        unei experienței excelente pentru vizitatorii site-ului{" "}
        <span className="text-white font-semibold">tău</span>. Aceștia sunt{" "}
        <span className="text-white font-semibold">cei mai importanți</span>{" "}
        pentru îndeplinirea{" "}
        <span className="text-white font-semibold">scopului propus</span> și
        încercam să le oferim{" "}
        <span className="text-white font-semibold">cele mai bune</span>{" "}
        instrumente pentru a analiza datele și informațiile despre produsele și
        serviciile
        <span className="text-white font-semibold"> tale</span>. Este important
        ca vizitatorii tăi să poata gasi{" "}
        <span className="text-white font-semibold">usor</span> informațiile pe
        care le caută și sa înteleagă facil cum{" "}
        <span className="text-white font-semibold">funcționează acestea</span>.
        Așadar, de la bun început construim website-ul într-un mod cât mai{" "}
        <span className="text-white font-semibold">
          eficient pentru clientul final
        </span>
        .
      </p>

      <ul class="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400 flex flex-col gap-2">
        {["Experientă", "Performantă", "Seriozitate", "Profesionalism", "Eficiență"].map(
          (e, index) => (
            <li class="flex items-center" key={index}>
              <svg
                class="w-4 h-4 mr-1.5 text-yellow-400 dark:text-yellow-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {e}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default ContentTwo;
