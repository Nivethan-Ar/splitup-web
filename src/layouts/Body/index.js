/* eslint-disable react/prop-types */
import React from "react";

function Body({ children }) {
  return (
    <div className="flex flex-col justify-center h-screen text-white w-screen items-center">
      <div className="bg-white bg-opacity-80 backdrop-blur-sm backdrop-filter bg-clip-padding border border-gray-400 shadow-xl w-10/12 h-4/5 rounded-3xl text-slate-800 px-8 py-2">
        {children}
      </div>
    </div>
  );
}

export default Body;
