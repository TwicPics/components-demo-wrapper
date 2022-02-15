/* eslint-disable react/prop-types */
import { default as TwicHeader } from "./twicHeader";

import React, { useEffect } from "react";
import WebFont from "webfontloader";

const TwicWrapper = ({ title, tags, redirect, children }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat:400,600,700"],
      },
    });
  }, []);

  return (
    <div id="twic-demo-wrapper">
      <TwicHeader title={title} tags={tags} redirect={redirect}></TwicHeader>
      <main id="twic-demo-container">{children}</main>
    </div>
  );
};

export default TwicWrapper;
