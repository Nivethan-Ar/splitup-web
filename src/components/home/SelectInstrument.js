import React from "react";
import Select from "react-select";

import SelectImg from "../../assets/main/select.svg";

function SelectInstrument(props) {
  const options = [{ value: "piano", label: "Piano" }];
  const timeSignatureOptions = [
    { value: "2/2", label: "2/4" },
    { value: "3/3", label: "3/4" },
    { value: "4/4", label: "4/4" }
  ];

  // eslint-disable-next-line react/prop-types
  const { timeSignatureFunction } = props;

  const handleChange = (e) => {
    timeSignatureFunction(e.value);
  };

  return (
    <div className="grid grid-cols-2 h-4/5 place-items-center items-center justify-center">
      {/* select instrument side */}
      <div className="bg-gradient-to-br from-[#ff5f96] to-blue-400 rounded-md py-12 px-8 text-black font-semibold cursor-pointer">
        {/*  */}
        <h3 className=" text-white text-xl mb-4 uppercase text-center">
          Select An instrument to start the process
        </h3>
        <Select options={options} />
        <h3 className=" text-white text-xl mb-4 mt-3 uppercase text-center">
          Select the song time signature
        </h3>
        <Select options={timeSignatureOptions} onChange={handleChange} />
      </div>

      {/* img side */}
      <div className="w-11/12 self-center">
        <img src={SelectImg} alt="" className=" " />
      </div>
    </div>
  );
}

export default SelectInstrument;
