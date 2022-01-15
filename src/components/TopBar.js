import React from "react";
import MusicLogo from "../assets/music.png";

function TopBar() {
  return (
    <div className="flex items-center gap-2 border-b-2 border-opacity-10 pb-1 border-gray-600 ">
      <img src={MusicLogo} alt="page logo" className="w-10 animate-pulse" />
      <h6 className="font-semibold text-2xl font-poppins ">SPLITUP</h6>
    </div>
  );
}

export default TopBar;
