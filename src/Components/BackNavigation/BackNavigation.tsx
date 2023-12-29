import React from "react";
import ArrowBackSVG from "../../SVG/ArrowBackSVG";
import HeartSVG from "../../SVG/HeartSVG";

type Props = {};

function BackNavigation({}: Props) {
  return (
    <div>
      <button>
        <ArrowBackSVG />
      </button>
      <p></p>
    </div>
  );
}

export default BackNavigation;
