import React from "react";

import Header from "./Header";
import Background from "./Background";
import Content from "./Content";
import Effects from "./Effects";

function MainPage() {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      <Background />
      <Header />
      <Content />
      <Effects />
    </div>
  );
}

export default MainPage;
