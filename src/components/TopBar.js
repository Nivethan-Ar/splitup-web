import React from "react";
import { Link } from "react-router-dom";
import MusicLogo from "../assets/music.png";

function TopBar() {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 border-b-2 border-opacity-10 pb-1 pt-4 border-gray-600 ">
        <img src={MusicLogo} alt="page logo" className="w-10 animate-pulse" />
        <h6 className="font-semibold text-2xl font-poppins ">SPLITUP</h6>
      </div>
    </Link>
  );
}

export default TopBar;
