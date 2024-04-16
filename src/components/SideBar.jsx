import React, { useContext } from "react";
import { FormContext } from "../Context";

function SideBar() {
  const { steps, currentStep } = useContext(FormContext);
  return (
    <div className="flex justify-around items-center bg-sidebarMobile bg-cover bg-no-repeat w-full h-1/5 md:h-full md:w-fit md:min-w-[300px] md:bg-sidebarDesktop md:bg-cover md:rounded-md">
      <div className="w-full px-10 flex justify-around items-center md:h-full md:flex-col md:justify-start md:items-start md:gap-4 md:px-5 md:py-10">
        {steps.map((item) => (
          <div className="frc gap-5" key={item.id}>
            <p
              className={
                item.step == currentStep
                  ? "activeIndicator"
                  : "inactiveIndicator"
              }
            >
              {item.step}
            </p>
            <p className="hidden md:flex flex-col justify-center items-start text-lg text-white font-light uppercase">
              Step {item.step}
              <span className="font-bold">{item.title}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
