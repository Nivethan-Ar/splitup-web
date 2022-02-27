/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadImg from "../../assets/main/upload.svg";
import Popup from "../Popup";

function UploadSong() {
  const initialFormData = Object.freeze({});

  const [file, setFile] = useState(initialFormData);
  const [feedback, setFeedback] = useState(false);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   accept: ".mp3",
  //   maxFiles: 1,
  //   maxSize: 30000000, // 30mb
  //   minSize: 500000, // 0.5mb
  //   onDrop: (acceptedFiles) => {
  //     setFiles(
  //       acceptedFiles.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file)
  //         })
  //       )
  //     );
  //   }
  // });

  const handleChange = (e) => {
    setFile({
      ...file,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleOnSubmit = (e) => {
    setFeedback(true);
    // e.preventDefault();
    // console.log(file);
    // const data1 = new FormData();
    // data1.append("song", file);
    // fetch("http://127.0.0.1:5000/upload", {
    //   method: "POST",
    //   mode: "no-cors",
    //   body: data1,
    //   headers: {
    //     "content-type": "multipart/form-data"
    //   }
    // })
    //   .then((response) => {
    //     console.log("resolved:", response);
    //   })
    //   .catch((err) => {
    //     console.log("ERROR", err);
    //   });
  };

  const togglePopup = () => {
    setFeedback(!feedback);
  };
  return (
    <div className="grid grid-cols-2 h-4/5 place-items-center">
      <div className="w-9/12 self-center">
        <img src={UploadImg} alt="" className=" " />
      </div>
      {/* upload side */}

      <div className="flex flex-col gap-6 w-11/12 h-full items-center justify-center">
        <div>
          <h6 className="uppercase text-4xl text-white font-semibold font-poppins text-shadow-xl">
            upload a song
          </h6>
        </div>
        <div className="backdrop-blur-md bg-white/5 border-4 flex flex-col justify-center rounded-xl w-11/12 h-3/6 2xl:h-3/5 py-12 px-4 text-white">
          <form
            action="http://127.0.0.1:5000/upload"
            encType="multipart/form-data"
            method="post"
            onSubmit={handleOnSubmit}
            className="flex flex-col gap-4 justify-center items-center mt-4">
            <label
              htmlFor="song"
              className="p-4 w-full rounded-md bg-blue-500 font-semibold tracking-wide cursor-pointer text-lg shadow-md">
              Select A File
              <input
                type="file"
                accept="audio/mpeg3"
                onChange={handleChange}
                name="song"
                id="song"
                className="hidden"
              />
            </label>

            <button
              type="submit"
              onClick={togglePopup}
              className=" bg-blue-500 py-2 px-4 mt-2 rounded-md w-40 font-semibold shadow-md">
              Upload
            </button>
          </form>

          <div>{}</div>
        </div>
      </div>
      {feedback && <Popup togglePopup={togglePopup} />}
    </div>
  );
}

export default UploadSong;
