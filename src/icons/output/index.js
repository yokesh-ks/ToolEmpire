import React from "react";
import SvgPdf from "./Pdf";

export const Icon = (props) => {
  if (props.name === "Pdf") {
    return <SvgPdf {...props} />;
  }
};
export const PropTypes = ["Pdf"];
