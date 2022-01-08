/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadImg from "../../assets/main/upload.svg";

function UploadSong() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "audio/mp3",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    maxFiles: 1
  });

  const song = files.map((file) => (
    <div key={file.name}>
      <div>
        <audio controls>
          <source src={file.preview} type="audio/mp3" />
          your broswer does not support the audio format
        </audio>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-2 h-4/5 place-items-center">
      <div className="w-11/12 self-center">
        <img src={UploadImg} alt="" className=" " />
      </div>

      {/* upload side */}
      <div className="bg-gradient-to-br from-[#ff5f96] to-blue-400 flex flex-col justify-center rounded-md w-11/12 h-2/5 py-12 px-4 text-white cursor-pointer">
        <div {...getRootProps({ className: "dropzone" })} className="flex flex-col ">
          <input {...getInputProps()} />

          <h3 className="text-white text-2xl uppercase text-center">
            Drag and drop a file here / click to select files
          </h3>

          <code className="text-xs text-center">
            only accept 1 audio file, upto 20 minutes (0.5mb - 30mb){" "}
          </code>
        </div>

        <div>{song}</div>
      </div>
    </div>
  );
}

export default UploadSong;
