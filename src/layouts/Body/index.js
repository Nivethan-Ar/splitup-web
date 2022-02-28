/* eslint-disable react/prop-types */
import React from "react";
import TopBar from "../../components/TopBar";
import bgVideo from "../../assets/videos/bg1.mp4";

function Body({ children }) {
  return (
    <div className="relative flex flex-col justify-center h-screen text-white w-screen items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 md:min-w-[210%] brightness-75 contrast-125 lg:min-w-[160%] xl:min-w-[140%] 2xl:min-w-[120%] min-h-full animate-bgFade">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="bg-white/20 bg-opacity- backdrop-blur-lg bg-clip-padding border-white/60 shadow-xl w-11/12 h-5/6 rounded-3xl text-slate-800 px-8 py-2">
        <TopBar />
        {children}
      </div>
    </div>
  );
}

export default Body;
