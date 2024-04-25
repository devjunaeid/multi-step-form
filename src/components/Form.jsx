import React, { useContext } from "react";
import { FormContext } from "../Context";
import Plan from "./Plan";
import AddOns from "./AddOns";
import { CheckInput } from "../utils/FormValidation";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

function Form() {
  const { currentStep, formData, setFormData, error, setError } =
    useContext(FormContext);
  const handleChange = (e) => {
    const temp = { ...formData, [e.target.name]: e.target.value };
    const errRes = CheckInput(temp);
    setError(errRes);
    setFormData(temp);
  };
  return (
    <div className="flex h-full">
      <form className="w-[95%] relative m-auto h-fit -mt-[2rem] bg-white rounded-md md:mt-0 md:h-full">
        <div className="relative flex w-full min-h-full">
          {currentStep == 1 && (
            <div className="flex flex-col justify-start items-center min-w-full p-4 rounded-md bg-white h-fit">
              <p className="flex flex-col justify-start items-start w-full text-lg text-gray-400">
                <span className="text-3xl font-ubuntu_bold text-black">
                  Personal Info
                </span>
                Please provide your name, email address and phone number.
              </p>
              <div className="flex flex-col justify-start items-start w-full mt-[1.2rem]">
                <div className="w-full flex justify-between items-center">
                  <label
                    htmlFor="name"
                    className="text-sm font-ubuntu_medium text-blue-950"
                  >
                    Name
                  </label>
                  {error.name && (
                    <p className="text-xs text-red-500 font-semibold">
                      {error.name}
                    </p>
                  )}
                </div>
                <input
                  name="name"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. Thamid Junaeid"
                  value={formData.name ? formData.name : ""}
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full mt-[1.2rem]">
                <div className="w-full flex justify-between items-center">
                  <label
                    htmlFor="email"
                    className="text-sm font-ubuntu_medium text-blue-950"
                  >
                    Email Address
                  </label>
                  {error.email && (
                    <p className="text-xs text-red-500 font-semibold">
                      {error.email}
                    </p>
                  )}
                </div>
                <input
                  name="email"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. demo@email.com"
                  value={formData.email ? formData.email : ""}
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full my-[1.2rem]">
                <div className="w-full flex justify-between items-center">
                  <label
                    htmlFor="phone"
                    className="text-sm font-ubuntu_medium text-blue-950"
                  >
                    Phone Number
                  </label>
                  {error.phone && (
                    <p className="text-xs text-red-500 font-semibold">
                      {error.phone}
                    </p>
                  )}
                </div>
                <input
                  name="phone"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. +88 0112345xxxx"
                  value={formData.phone ? formData.phone : ""}
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep == 2 && (
            <div className="flex flex-col justify-start items-center min-w-full p-4 rounded-md bg-white h-fit">
              <p className="flex flex-col justify-start items-start w-full text-lg text-gray-400">
                <span className="text-3xl font-ubuntu_bold text-black">
                  Select Your Plan
                </span>
                You have the option to select monthly or yearly billing.
              </p>
              <Plan />
            </div>
          )}

          {/* Step 3 */}
          {currentStep == 3 && (
            <div className="flex flex-col justify-start items-center min-w-full p-4 rounded-md bg-white h-fit">
              <p className="flex flex-col justify-start items-start w-full text-lg text-gray-400">
                <span className="text-3xl font-ubuntu_bold text-black">
                  Pick add-ons
                </span>
                Add-ons help enhance your gaming experiance.
              </p>
              <AddOns />
            </div>
          )}

          {/* Step 4 */}
          {currentStep == 4 && (
            <div className="flex flex-col justify-start items-center min-w-full p-4 rounded-md bg-white h-fit">
              <p className="flex flex-col justify-start items-start w-full text-lg text-gray-400">
                <span className="text-3xl font-ubuntu_bold text-black">
                  Finishing Up
                </span>
                Double check everything looks OK before Confirming.
              </p>
              <Summary />
            </div>
          )}

          {/* Success */}
          {currentStep == 5 && (
            <div className="flex flex-col justify-center items-center min-w-full min-h-full p-4 rounded-md bg-white">
             <ThankYou /> 
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
