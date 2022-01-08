/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "react-step-progress-bar/styles.css";
import { ProgressBar as Progress } from "react-step-progress-bar";

import React from "react";

function ProgressBar({ step }) {
  const stepPercentage = step * 33;
  return (
    <Progress
      percent={stepPercentage}
      filledBackground="linear-gradient(to right, #ff5f96, #60a5fa)"
    />
  );
}

export default ProgressBar;
