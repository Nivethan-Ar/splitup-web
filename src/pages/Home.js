/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import Result from "../components/home/Result";
import SelectInstrument from "../components/home/SelectInstrument";
import UploadSong from "../components/home/UploadSong";
import Body from "../layouts/Body";
import ProgressBar from "../components/home/ProgressBar";
import api from "../api/api";

function Home() {
  const [page, setPage] = useState(1);
  const [amtData, setAmtData] = useState("");
  const [timeSignature, setTimeSignature] = useState("");

  const assignTimeSignature = (stringSignature) => {
    setTimeSignature(stringSignature);
    console.log("Time Signature: ", stringSignature);
  };

  async function handleSubmit() {
    if (page === 3) return;
    setPage(() => page + 1);

    try {
      const res = await api.get("/process");
      console.log(res);
      setAmtData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function nextPage() {
    if (page === 3) return;
    setPage(() => page + 1);
  }

  function previousPage() {
    if (page === 1) return;
    setPage(() => page - 1);
  }

  // let audio;
  // let url;
  // let audi;
  // async function testing() {
  //   try {
  //     const res = await axios.get("http://localhost:5000/download", {
  //       responseType: "blob"
  //     });
  //     console.log(res);
  //     const mp3 = new Blob([res.data], { type: "audio/mp3" });
  //     url = window.URL.createObjectURL(mp3);
  //     audi = document.querySelector("audio");
  //     audi.src = url;
  //     // audio = new Audio(url);
  //     // audio.load();
  //     // await audio.play();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function setAudio(audio2, url2) {
  //   audio2.src = URL.createObjectURL(new Blob([await (await fetch(url2)).arrayBuffer()]));
  // }
  // setAudio(document.querySelector("audio"), url);
  return (
    <Body>
      <div className="h-full relative text-center">
        {/* Progress Bar */}
        <div className="bg-white rounded-lg mt-4">
          <ProgressBar step={page} />
        </div>
        {/* <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 w-36 text-white hover:shadow-blue-500/60 shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md">
          check
        </button> */}

        {/* <audio src={url} controls /> */}

        {/* contents */}
        <div className="h-full">
          {page === 1 && <UploadSong />}
          {page === 2 && <SelectInstrument timeSignatureFunction={assignTimeSignature} />}
          {page === 3 && <Result amtData={amtData} timeSignature={timeSignature} />}
        </div>

        {/* buttons */}
        <div className="top-[76%] 2xl:top-[80%] w-full absolute">
          {page !== 3 && (
            <button
              type="button"
              onClick={previousPage}
              className={` w-36 text-white ${
                page === 1 ? "bg-gray-400" : "bg-blue-500 hover:shadow-blue-500/60"
              }  shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md`}>
              previous
            </button>
          )}
          {page < 2 && (
            <button
              type="button"
              onClick={nextPage}
              className=" bg-blue-500 w-36 text-white hover:shadow-blue-500/60 shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md">
              next
            </button>
          )}
          {page === 2 && (
            <button
              type="button"
              onClick={handleSubmit}
              className="  bg-blue-500 w-36 text-white hover:shadow-blue-500/60 shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md">
              submit
            </button>
          )}
        </div>
      </div>
    </Body>
  );
}

export default Home;
