import React from "react";

import Card from "./Card";
import Content from "./Content";

function Section6() {
  return (
    <div className="px-[17rem] py-[5rem] flex flex-col relative gap-16">
      <Content />
      <div className="flex justify-between items-start">
        <Card
          title="Website Prezentare"
          price="499"
          content={["dsds", "dsdsd"]}
          content_small={["dsds", "dsdsd"]}
          small
          popular
        />
        <Card
          title="Magazin Online"
          price="999-1499"
          content={[
            "dsds",
            "dsdsd",
            "dsds",
            "dsdsd",
            "dsds",
            "dsdsd",
            "dsds",
            "dsdsd",
            "dsds",
            "dsdsd",
            "dsds",
            "dsdsd",
          ]}
        />
        <Card
          title="Serviciu Personalizat"
          price="??"
          content={["dsds", "dsdsd"]}
          small
        />
      </div>
    </div>
  );
}

export default Section6;
