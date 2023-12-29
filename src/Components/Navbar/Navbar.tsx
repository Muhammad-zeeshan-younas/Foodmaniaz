import React from "react";
import GraphSVG from "../../SVG/GraphSVG";
import HomeSVG from "../../SVG/HomeSVG";
import HeartSVG from "../../SVG/HeartSVG";
import LockSVG from "../../SVG/LockSVG";
import ProfileSVG from "../../SVG/ProfileSVG";
import { useNavigate } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  const activeFill: string = "#EA5323";
  const navigate = useNavigate();

  const navigationMenu = [
    {
      icon: <HomeSVG path="/" />,
      path: "/",
    },

    {
      icon: <HeartSVG path="/liked" />,
    },
    { icon: <LockSVG /> },
    {
      icon: <GraphSVG path="/stats" />,
    },
    { icon: <ProfileSVG />, path: "/cart" },
  ];
  return (
    <header className="fixed left-0 bottom-0 p-2 border-[1.5px] border-[#A1A1A1] w-full bg-white lg:w-max lg:top-0">
      <nav>
        <ul className="flex grow items-center justify-evenly lg:flex-col lg:items-center lg:h-screen">
          {navigationMenu.map((navigation, index) => (
            <li key={index}>
              <a
                onClick={(event) => {
                  event.preventDefault();
                  navigate(navigation.path || "");
                }}
              >
                {navigation.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
