/* eslint-disable react/self-closing-comp */
import React from "react";
import { Link } from "react-router-dom";
import MusicLogo from "../assets/music.png";

function TopBar() {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 border-b-2 border-opacity-40 pb-3 pt-4 border-gray-300 ">
        <img src={MusicLogo} alt="page logo" className="w-10 bg-white rounded-full animate-pulse" />
        <h6 className="font-semibold text-3xl font-poppins text-white tracking-widest text-shadow-md ">
          SPLITUP
        </h6>
      </div>
    </Link>
  );
}

export default TopBar;
