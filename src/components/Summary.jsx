import React, { useContext } from "react";
import { FormContext } from "../Context";
import { fromJSON } from "postcss";

function Summary() {
  const { formData, setCurrentStep } = useContext(FormContext);
  const plantype = formData.plan.type === "yearly" ? "yr" : "mo";

  // Get Total Cost of Addons.
  const findAddonsCost = (addons) => {
    var price = 0;
    Object.entries(addons).map(
      ([key, value]) => (price += key !== "type" ? value.price : 0)
    );
    return price;
  };

  return (
    <div className="w-full mt-5 bg-slate-50 rounded-md">
      <div className="w-full flex justify-between items-center border-b p-4 border-neutral-300/50">
        <div className="flex flex-col justify-start items-start">
          <p className="text-md font-semibold capitalize">
            {formData.plan.name}({formData.plan.type})
          </p>
          <p
            className="text-sm underline cursor-pointer hover:text-blue-500 hover:underlin"
            onClick={() => setCurrentStep(2)}
          >
            chnage
          </p>
        </div>
        <p className="text-base font-semibold text-black">
          ${formData.plan.price}/{plantype}
        </p>
      </div>

      {/* Addons */}
      <div className="flex flex-col justify-center items-center p-4 gap-2 border-b border-gray-300/30">
        {Object.entries(formData.addons).map(
          ([key, value]) =>
            key != "type" && (
              <div className="w-full flex justify-between items-center" key={key}>
                <p className="text-sm text-gray-500">{key}</p>
                <p className="text-sm text-gray-800 font-[600]">
                  +${value.price}/{plantype}
                </p>
              </div>
            )
        )}
      </div>

      {/* Total Cost */}
      <div className="flex justify-between items-center p-4 bg-white">
        <p className="text-sm text-gray-500">
          Total cost ({plantype === "yr" ? "per year" : "per month"})
        </p>
        <p className="font-md font-semibold text-blue-600">
          +${formData.plan.price + findAddonsCost(formData.addons)}/{plantype}
        </p>
      </div>
    </div>
  );
}

export default Summary;
