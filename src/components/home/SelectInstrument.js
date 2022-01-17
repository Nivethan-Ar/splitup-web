import React from "react";
import Select from "react-select";

import SelectImg from "../../assets/main/select.svg";

function SelectInstrument() {
  const options = [{ value: "piano", label: "Piano" }];

  return (
    <div className="grid grid-cols-2 h-4/5 place-items-center items-center justify-center">
      {/* select instrument side */}
      <div className="bg-gradient-to-br from-[#ff5f96] to-blue-400 rounded-md py-12 px-4 text-black font-semibold cursor-pointer">
        {/*  */}
        <h3 className=" text-white text-xl mb-4 uppercase text-center">
          Select An instrument to start the process
        </h3>
        <Select options={options} />
      </div>

      {/* img side */}
      <div className="w-11/12 self-center">
        <img src={SelectImg} alt="" className=" " />
      </div>
    </div>
  );
}

export default SelectInstrument;
