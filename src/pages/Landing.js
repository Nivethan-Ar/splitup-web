import React from "react";
import { Link } from "react-router-dom";

import musicImg from "../assets/landing/undraw_music.svg";
// import TopBar from "../components/TopBar";
import Body from "../layouts/Body";

function Landing() {
  return (
    <Body>
      {/* top bar inserted via Body, go to layouts/Body/index.js */}

      {/* content */}
      <div className="grid grid-cols-2 h-full ">
        <div className="flex gap-6 flex-col justify-center font-semibold capitalize h-full text-4xl">
          <div className="">
            <h3>isolate music instruments</h3>
            <h3>with their music score</h3>
            <h3>
              Using <span className="text-blue-500">Signal Processing </span>&
            </h3>
            <h3>
              {" "}
              <span className="text-blue-500">Deep Learning</span>
            </h3>
          </div>
          <p className="text-lg max-w-md lowercase  font-medium">
            let&apos;s try out our new product and learn a new musical instrument faster than before{" "}
          </p>
          <Link to="home">
            <button
              className="w-36 shadow-2xl hover:shadow-blue-500/60 font-semibold text-white py-2 text-base rounded-md bg-blue-500"
              type="button">
              Try Now
            </button>
          </Link>
        </div>

        {/* music listener img */}
        <div className="self-center">
          <img src={musicImg} alt="" />
        </div>
      </div>
    </Body>
  );
}

export default Landing;
