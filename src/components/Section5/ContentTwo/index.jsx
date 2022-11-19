import React from "react";

import Button from "../../../assets/Button/Style_1";

function ContentTwo() {
  return (
    <div className="flex flex-col gap-6">
      <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
        <div class="flex items-center space-x-2 w-full">
          <div class="h-4 bg-gray-200 rounded-full dark:bg-neutral-700 w-32"></div>
          <div class="h-4 bg-neutral-300 rounded-full dark:bg-neutral-700 w-24"></div>
          <div class="h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-4 bg-neutral-200 rounded-full dark:bg-neutral-700 w-full"></div>
          <div class="h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
          <div class="h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[400px]">
          <div class="h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
          <div class="h-4 bg-neutral-200 rounded-full dark:bg-neutral-700 w-80"></div>
          <div class="h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
        </div>

        <span class="sr-only">Loading...</span>
      </div>
      <div className="text-[#999b9f] text-lg">
        {/* Change href to /contact in next update */}
        <a href="tel:0765865718" className="text-white font-semibold">
          Scrie-ne tu
        </a>
        &nbsp;despre proiectul&nbsp;
        <span className="text-white font-semibold">
          tău și te contactăm noi
          <span className="text-yellow-400">&nbsp;!</span>
        </span>
      </div>
      <div className="pt-2">
        <Button title="Vreau Ofertă!" href="/contact" />
      </div>
    </div>
  );
}

export default ContentTwo;
