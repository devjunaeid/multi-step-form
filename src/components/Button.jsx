import React, { useContext } from "react";
import { FormContext } from "../Context";

function Button() {
  // Form Context values that we got from main Component. In this case `App.jsx`.
  const { currentStep, totalStep, handleNext, handlePrev, handleSubmit } =
    useContext(FormContext);

  return (
    <div className="flex justify-between p-5 w-full h-fit gap-5 bg-white md:pb-0">
      {/* Previous Button */}
      <button
        className={
          // Only hide if the current step is one or first step; show otherwise.
          currentStep == 1
            ? "hidden"
            : "flex px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-md font-ubuntu_medium"
        }
        onClick={() => handlePrev()}
      >
        Prev
      </button>

      {/* Right Side Button Group(Next and Submit Button) */}
      <div className="w-full flex justify-end flex-1">
        <button
          className={
            // Only hide the button if the current step is the final step; otherwise show.
            currentStep == totalStep
              ? "hidden"
              : "flex px-4 py-2 bg-blue-400 border border-blue-500 font-ubuntu_medium rounded-md"
          }
          onClick={() => handleNext()}
        >
          Next
        </button>

        {/* Submit Button */}
        <button
          className={
            // Always hide when current step is not final step; show otherwise.
            currentStep != totalStep
              ? "hidden"
              : "flex px-4 py-2 bg-green-400 border border-green-500 font-ubuntu_medium rounded-md"
          }
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Button;
