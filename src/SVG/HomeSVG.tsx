import React from "react";
import { isLinkActive } from "../utills/ActiveRoute";

type Props = { path: string };

function HomeSVG({ path }: Props) {
  return (
    <svg
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0294 0.689319C15.3725 0.26908 14.5311 0.26908 13.8741 0.689319L1.25655 8.75997C0.681906 9.12753 0.334229 9.76264 0.334229 10.4448V26.0498C0.334229 27.1543 1.22966 28.0498 2.33423 28.0498H7.47019C8.57476 28.0498 9.47019 27.1543 9.47019 26.0498V19.1415C9.47019 18.037 10.3656 17.1415 11.4702 17.1415H18.4334C19.5379 17.1415 20.4334 18.037 20.4334 19.1415V26.0498C20.4334 27.1543 21.3288 28.0498 22.4334 28.0498H27.5693C28.6739 28.0498 29.5693 27.1543 29.5693 26.0498V10.4448C29.5693 9.76264 29.2216 9.12753 28.647 8.75997L16.0294 0.689319Z"
        fill={isLinkActive(path) ? "#EA5323" : "none"}
        stroke={isLinkActive(path) ? "none" : "#A1A1A1"}
      />
    </svg>
  );
}

export default HomeSVG;
