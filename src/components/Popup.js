/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Popup(props) {
  // const { togglePopup } = props;
  return (
    <div className="absolute -top-36 left-[50%] border border-white/10 -translate-x-1/2 backdrop-blur-md w-[104%] rounded-xl bg-white/40 shadow-2xl animate-fade">
      <div className="py-2 relative">
        <h6 className="text-white text-shadow-md text-xl tracking-wider font-semibold">
          🎉🥳 UPLOAD SUCCESSFULL 🥳 🎉
        </h6>
        {/* <button
          type="button"
          onClick={togglePopup}
          className=" bg-blue-500 w-32 text-white hover:shadow-blue-500/60 shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md">
          close
        </button> */}
      </div>
    </div>
  );
}

export default Popup;
