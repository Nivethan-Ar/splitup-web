/* eslint-disable react/prop-types */
import React from "react";

function Popup(props) {
  const { togglePopup } = props;
  return (
    <div className="fixed top-2/4 left-[42%] h-30 w-70 rounded-md bg-white shadow-2xl">
      <div className="relative p-4">
        <h6 className="text-blue-500 text-xl font-semibold">UPLOAD SUCCESSFULL</h6>
        <button
          type="button"
          onClick={togglePopup}
          className=" bg-blue-500 w-32 text-white hover:shadow-blue-500/60 shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md">
          close
        </button>
      </div>
    </div>
  );
}

export default Popup;
