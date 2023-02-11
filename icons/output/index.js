import React from "react";
import SvgArrowDown from "./ArrowDown";
import SvgCopyLink from "./CopyLink";
import SvgPdf from "./Pdf";
import SvgSwitchArrow from "./SwitchArrow";

export const Icon = (props) => {
  if (props.name === "ArrowDown") {
    return <SvgArrowDown {...props} />;
  }
  if (props.name === "CopyLink") {
    return <SvgCopyLink {...props} />;
  }
  if (props.name === "Pdf") {
    return <SvgPdf {...props} />;
  }
  if (props.name === "SwitchArrow") {
    return <SvgSwitchArrow {...props} />;
  }
};
export const PropTypes = ["ArrowDown", "CopyLink", "Pdf", "SwitchArrow"];
