import { useContext, useEffect, useState } from "react";
import { FormContext } from "../Context";

// Addons
const addons = {
  "Online Service": {
    id: 1,
    des: "Access to multiplayer games.",
    price_monthly: 1,
    price_yearly: 10,
  },
  "Extra Storage": {
    id: 2,
    des: "Extra 1TB of Cloud Storage.",
    price_monthly: 2,
    price_yearly: 20,
  },
  "Customizable Profile": {
    id: 3,
    des: "Custom theme on your profile.",
    price_monthly: 2,
    price_yearly: 20,
  },
};

function AddOns() {
  const { formData, setFormData } = useContext(FormContext);
  const [addedService, setAddedService] = useState({
    type: formData.plan?.type,
  });

  // Handle Input Change
  const handleChange = (key, item) => {
    if (addedService[key] != undefined) {
      var temp = addedService;
      delete temp[key];
      setFormData({ ...formData, addons: temp });
      setAddedService(temp);
    } else {
      var temp = {
        ...addedService,
        [key]: {
          price:
            formData.plan?.type === "yearly"
              ? item.price_yearly
              : item.price_monthly,
        },
      };
      setFormData({ ...formData, addons: temp });
      setAddedService(temp);
    }
  };

  // Getting addons if it was already choosen
  useEffect(() => {
    if (Object.keys(formData.addons).length != 0) {
      // Check If plan type changes in step 2.
      if (formData.plan?.type === formData.addons.type) {
        //If plan type remain same
        setAddedService(formData.addons); // Setting addon data.
      } else {
        var temp = { type: formData.plan?.type };
        Object.entries(formData.addons).forEach(([key, value]) => {
          if (key != "type") {
            temp[key] = {
              price:
                formData.plan?.type === "yearly"
                  ? addons[key].price_yearly
                  : addons[key].price_monthly,
            };
          }
        });
        setAddedService(temp);
      }
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      {Object.entries(addons).map(([key, item]) => (
        <div
          className={`flex justify-center items-center gap-4 px-3 py-3 rounded-md md:gap-8 md:px-8 md:py-4 hover:border hover:border-blue-500 ${
            addedService[item.name] != undefined
              ? "border-2 border-blue-700"
              : "border-2 border-gray-300/25"
          }`}
          key={item.id}
        >
          <input
            type="checkbox"
            className="w-5 h-5 accent-blue-600"
            onChange={() => handleChange(key, item)}
            checked={addedService[key] != undefined}
          />
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col justify-start align-baseline">
              <p className="text-lg md:text-xl font-semibold">{key}</p>
              <p className="text-base md:text-md font-normal text-gray-400">
                {item.des}
              </p>
            </div>
            <p className="text-sm md:text-base text-blue-500">
              +$
              {formData.plan?.type === "yearly"
                ? `${item.price_yearly}/yr`
                : `${item.price_monthly}/mo`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddOns;
