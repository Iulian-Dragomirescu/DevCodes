import React from "react";
import { CornerTop, CornerBottom } from "../../assets/Corner";

import Box from "./Box";
import Content from "./Content";

function Section1() {
  const data = [
    {
      title: "web design",
      icon: [
        <path d="M20 4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />,
        <path d="M7 20h10" />,
        <path d="M9 16v4" />,
        <path d="M15 16v4" />,
        <path d="M9 12V8" />,
        <path d="M12 12v-1" />,
        <path d="M15 12v-2" />,
        <path d="M12 12v-1" />,
      ],
    },
    {
      title: "web applications",
      icon: [
        <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />,
        <path d="M6 8h.01" />,
        <path d="M9 8h.01" />,
      ],
    },
    {
      title: "Landing page",
      icon: [
        <path d="M7 15H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />,
        <path d="M19 15h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />,
        <path d="M13 3h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />,
        <path d="M6 15v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />,
        <path d="M12 9v3" />,
      ],
    },
    {
      title: "online shop",
      icon: [
        <path d="m7 10 5-6 5 6" />,
        <path d="m21 10-2 8c-.093.573-.345 1.087-.71 1.453-.366.365-.822.559-1.29.547H7c-.468.012-.924-.182-1.29-.547-.365-.366-.617-.88-.71-1.453l-2-8h18Z" />,
        <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
      ],
    },
    {
      title: "seo optimization",
      icon: [
        <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
        <path d="M6 21v-2a4 4 0 0 1 4-4h1" />,
        <path d="M16.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
        <path d="M18.5 19.5 21 22" />,
      ],
    },
    {
      title: "Responsive design",
      icon: [
        <path d="M3 12h7" />,
        <path d="M21 12h-7" />,
        <path d="m18 15 3-3-3-3" />,
        <path d="M3 6V3h18v3" />,
        <path d="M3 18v3h18v-3" />,
        <path d="m6 15-3-3 3-3" />,
      ],
    },
  ];

  return (
    <div
      id="serviciile-noastre"
      className="px-[6%] lg:px-[17rem] py-[5rem] grid md:grid-cols-3 lg:grid-cols-4 relative justify-items-center lg:justify-items-start"
    >
      <CornerTop />
      <CornerBottom />

      <div className="col-span-2 pb-10">
        <Content />
      </div>

      {data.map((e, index) => (
        <div className="pb-10 row-auto">
          <Box
            key={index}
            title={e.title}
            icon={e.icon}
            number={"0" + (index + 1)}
          />
        </div>
      ))}
    </div>
  );
}

export default Section1;
