/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-undef */
import React, { useState } from "react";
import axios from "axios";
import LoadIcon from "../../assets/result/loading2.png";
import "./Results.css";

function Result(props) {
  const { amtData, setAmtData } = props;
  // const [notation, setNotation] = useState("");
  let url;
  let audi;

  const { timeSignature } = props;

  const [firstBar, secondBar] = timeSignature.split("/");

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
      await audio.play();
    } catch (error) {
      console.log(error);
    }
  }
  let stringNote = "| ";

  const getNotation = () => {
    let bar = 1;
    let barCount = 1;

    for (let i = 0; i < amtData.beat_times.length; i++) {
      if (i < amtData.beat_times.length - 1) {
        const barTime = amtData.beat_times[i + 1].time - amtData.beat_times[i].time;
        let bitBar;
        let bitNumbers;
        if (bar === 1) {
          bitBar = barTime / firstBar;
          bitNumbers = firstBar;
        } else {
          bitBar = barTime / secondBar;
          bitNumbers = secondBar;
        }

        let changed = true;
        for (let k = 0; k < bitNumbers; k++) {
          for (let j = 0; j < amtData.notes.length; j++) {
            if (
              amtData.beat_times[i].time + k * bitBar < amtData.notes[j].time &&
              amtData.notes[j].time < amtData.beat_times[i].time + (k + 1) * bitBar
            ) {
              let note = amtData.notes[j].note.toString();

              if (note.startsWith("C\u266f")) {
                note = note.replace("C\u266f", "D#");
              } else if (note.startsWith("D\u266f")) {
                note = note.replace("D\u266f", "E#");
              } else if (note.startsWith("F\u266f")) {
                note = note.replace("F\u266f", "F'");
              } else if (note.startsWith("G\u266f")) {
                note = note.replace("G\u266f", "A#");
              } else if (note.startsWith("A\u266f")) {
                note = note.replace("A\u266f", "B#");
              }

              note = note.replace("\u266f", "#");
              stringNote = stringNote.concat(note, " ");
              changed = false;
              break;
            }
          }
          if (changed === true) {
            stringNote = stringNote.concat("_", " ");
          } else {
            stringNote = stringNote.concat();
            changed = true;
          }
        }
      }
      if (bar === 1) {
        bar = 2;
      } else {
        bar = 1;
      }
      stringNote = stringNote.concat(" ", "|", " ");

      if (barCount === 4) {
        barCount = 1;
        stringNote = stringNote.concat("\n", "|", " ");
      } else {
        ++barCount;
      }
    }

    return stringNote;
  };

  const downloadNotationHandler = () => {
    // eslint-disable-next-line prefer-const
    let popup = window.open("", "Print", "height=800,width=600");
    popup.document.write("<html><head><title>Notation</title></head><body>");
    popup.document.write(document.getElementsById("result").innerHTML);
    popup.document.write("</body></html>");
    popup.document.close();
    popup.focus();

    popup.print();
    popup.close();
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80%] gap-4">
      {amtData ? (
        <div className="h-96 overflow-y-scroll w-2/4 bg- p-4 rounded-md">
          <pre className="result" id="result">
            {getNotation()}
          </pre>
        </div>
      ) : (
        <div className="h-96 w-2/4 flex flex-col items-center justify-center">
          <img src={LoadIcon} className="animate-spin w-20" alt="" />
        </div>
      )}
      <button
        type="button"
        onClick={downloadNotationHandler}
        className={`w-44 text-white
        ${amtData ? "bg-blue-500 hover:shadow-blue-500/60" : "bg-gray-400"}
        shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md`}>
        Download Notation
      </button>

      {/* MSS STEM RESULT   */}
      <audio src={url} controls />

      <button
        type="button"
        onClick={handleClick}
        // onClick={getNotation}
        className={` w-36 text-white
        ${amtData ? "bg-blue-500 hover:shadow-blue-500/60" : "bg-gray-400"}
        shadow-lg font-semibold capitalize text-base px-4 py-2 mx-2 rounded-md`}>
        listen stem
      </button>
    </div>
  );
}

export default Result;
