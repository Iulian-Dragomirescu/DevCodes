import React from "react";

import { Helmet } from "react-helmet";

import Content from "./Content";

function Contact() {
  return (
    <div>
      <Helmet>
        {/* <!-- Section - 1 --> */}
        <title>DevCodes - Contact</title>
        <link rel="canonical" href="https://devcodes.ro/contact" />
        <meta
          name="description"
          content="Contactează-ne și povestește-ne despre proiectul tău."
        />

        {/* <!-- Section - 2 --> */}
        <meta property="og:title" content="DevCodes - Contact" />
        <meta
          property="og:description"
          content="Contactează-ne și povestește-ne despre proiectul tău."
        />
        <meta property="og:image" content="https://devcodes.ro/logo-min.ico" />
        <meta property="og:url" content="https://devcodes.ro" />

        {/* <!-- Section - 3 --> */}
        <meta name="twitter:title" content="DevCodes - Contact"></meta>
      </Helmet>
      <Content />
    </div>
  );
}

export default Contact;
