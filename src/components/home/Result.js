/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-undef */
import React, { useState } from "react";
import axios from "axios";

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
      <div className="h-96 overflow-y-scroll w-2/4 bg-gray-200 p-4 rounded-md">
        <pre>
          <code>{JSON.stringify(amtData, null, 4)}</code>
        </pre>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-500 w-36 text-white hover:shadow-blue-500/60 shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md">
        listen stem
      </button>
      <audio src={url} controls />
    </div>
  );
}

export default Result;
