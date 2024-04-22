import React, { useContext } from "react";
import { FormContext } from "../Context";
import Plan from "./Plan";

function Form() {
  const { currentStep, formData, setFormData } = useContext(FormContext);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
    console.log(formData)
  }
  return (
    <div>
      <form className="w-[95%] relative m-auto h-fit -mt-[2rem] bg-white rounded-md md:mt-0">
        <div className="relative w-full overflow-hidden">
          {currentStep == 1 && (
            <div className="flex flex-col justify-start items-center min-w-full p-4 rounded-md bg-white h-fit">
              <p className="flex flex-col justify-start items-start w-full text-lg text-gray-400">
                <span className="text-3xl font-ubuntu_bold text-black">
                  Personal Info
                </span>
                Please provide your name, email address and phone number.
              </p>
              <div className="flex flex-col justify-start items-start w-full mt-[1.2rem]">
                <label
                  htmlFor="name"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Name
                </label>
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
                <label
                  htmlFor="email"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Email Address
                </label>
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
                <label
                  htmlFor="phone"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. +88 123 456 789"
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
              <div className="flex flex-col justify-start items-start w-full mt-[1.2rem]">
                <label
                  htmlFor="name"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Thamid Junaeid"
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full mt-[1.2rem]">
                <label
                  htmlFor="email"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="e.g. demo@email.com"
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full my-[1.2rem]">
                <label
                  htmlFor="phone"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="e.g. +88 123 456 789"
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
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
              <div className="flex flex-col justify-start items-start w-full mt-[1.2rem]">
                <label
                  htmlFor="name"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Thamid Junaeid"
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full mt-[1.2rem]">
                <label
                  htmlFor="email"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="e.g. demo@email.com"
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full my-[1.2rem]">
                <label
                  htmlFor="phone"
                  className="text-sm font-ubuntu_medium text-blue-950"
                >
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="e.g. +88 123 456 789"
                  className="p-3 w-full border border-gray-300 rounded-sm placeholder:font-semibold"
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
