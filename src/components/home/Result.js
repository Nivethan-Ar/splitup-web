/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-undef */
import React, { useState } from "react";
import axios from "axios";
import LoadIcon from "../../assets/result/loading2.png";

function Result(props) {
  const { amtData } = props;
  let url;
  let audi;

  async function handleClick() {
    try {
      const res = await axios.get("http://localhost:5000/download", {
        responseType: "blob"
      });
      console.log(res);
      const mp3 = new Blob([res.data], { type: "audio/mp3" });
      url = window.URL.createObjectURL(mp3);
      audi = document.querySelector("audio");
      audi.src = url;
      // audio = new Audio(url);
      // audio.load();
      // await audio.play();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-[80%] gap-4">
      {/* <h1>output</h1> */}
      {amtData ? (
        <div className="h-96 overflow-y-scroll w-2/4 bg-gray-200 p-4 rounded-md">
          <pre>
            <code>{JSON.stringify(amtData, null, 4)}</code>
          </pre>
        </div>
      ) : (
        <div className="h-96 w-2/4 flex flex-col items-center justify-center">
          <img src={LoadIcon} className="animate-spin w-20" alt="" />
        </div>
      )}
      <button
        type="button"
        onClick={handleClick}
        className={` w-36 text-white ${
          amtData ? "bg-blue-500 hover:shadow-blue-500/60" : "bg-gray-400"
        }  shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md`}>
        listen stem
      </button>
      <audio src={url} controls />
    </div>
  );
}

export default Result;
