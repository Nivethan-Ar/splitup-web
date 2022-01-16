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
      <div className="w-11/12 self-center">
        <img src={UploadImg} alt="" className=" " />
      </div>

      {/* upload side */}
      <div className="bg-gradient-to-br from-[#ff5f96] to-blue-400 flex flex-col justify-center rounded-md w-11/12 h-2/5 py-12 px-4 text-white ">
        {/* <div {...getRootProps({ className: "dropzone" })} className="flex flex-col ">
          <input {...getInputProps()} />

          <h3 className="text-white text-2xl uppercase text-center">
            Drag and drop a file here / click to select files
          </h3>

          <code className="text-xs text-center">
            only accept 1 audio file, upto 20 minutes (0.5mb - 30mb){" "}
          </code>
        </div> */}
        <form
          action="http://127.0.0.1:5000/upload"
          encType="multipart/form-data"
          method="post"
          onSubmit={handleOnSubmit}
          className="flex flex-col gap-4 justify-center items-center mt-4">
          <label
            htmlFor="song"
            className="p-4 w-full rounded-md bg-blue-500 font-semibold tracking-wide cursor-pointer text-lg">
            Select A File
            <input type="file" onChange={handleChange} name="song" id="song" className="hidden" />
          </label>
          <button
            type="submit"
            onClick={togglePopup}
            className=" bg-blue-500 py-2 px-4 rounded-md w-40 font-semibold">
            Upload
          </button>
        </form>

        {feedback && <Popup togglePopup={togglePopup} />}
        <div>{}</div>
      </div>
    </div>
  );
}

export default UploadSong;
