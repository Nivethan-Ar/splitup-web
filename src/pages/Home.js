/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Result from "../components/home/Result";
import SelectInstrument from "../components/home/SelectInstrument";
import UploadSong from "../components/home/UploadSong";
import Body from "../layouts/Body";
import ProgressBar from "../components/home/ProgressBar";

function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    song: {},
    instrument: {}
  });

  function nextPage() {
    if (page === 3) return;
    setPage(() => page + 1);
  }
  function previousPage() {
    if (page === 1) return;
    setPage(() => page - 1);
  }
  return (
    <Body>
      <div className="h-full relative text-center">
        {/* Progress Bar */}
        <div className=" mt-4">
          <ProgressBar step={page} />
        </div>

        {/* contents */}
        <div className="h-full">
          {page === 1 && <UploadSong data={data.song} />}
          {page === 2 && <SelectInstrument data={data.instrument} />}
          {page === 3 && <Result />}
        </div>

        {/* buttons */}
        <div className="top-[83%] w-full absolute">
          {page !== 3 && (
            <button
              type="button"
              onClick={previousPage}
              className="bg-blue-500 w-36 text-white hover:shadow-blue-500/60 shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md">
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
              type="submit"
              onClick={nextPage}
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
