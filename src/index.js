import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

// Index CSS
import "./index.css";

// React ga
import PageView from "./ReactGa/Tracking";

// Drawer Menu
import Drawer from "./components/Menu";

// Main Page
import MainPage from "./components/MainPage";

// Section Pages
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
// import Section6 from "./components/section6"; // next update

// Import Contact
import Contact from "./components/Contact";

// Footer Page
import Footer from "./components/Footer";

//  Initialize ReactGA
ReactGA.initialize(process.env.REACT_APP_TRACKING_ID, { debug: true });

ReactDOM.render(
  <React.StrictMode>
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route
            path="/contact"
            element={
              <>
                <Drawer />
                <Contact />
                <Footer />
                <PageView />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Drawer />
                <MainPage />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                {/* <Section6 /> */}
                <Footer />
                <PageView />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
