import { useContext, useEffect, useState } from "react";
import { FormContext } from "../Context";

// Addons
const addons = [
  {
    id: 1,
    name: "Online Service",
    des: "Access to multiplayer games.",
    price: 1,
  },
  {
    id: 2,
    name: "Extra Storage",
    des: "Extra 1TB of Cloud Storage.",
    price: 2,
  },
  {
    id: 3,
    name: "Customizable Profile",
    des: "Custom theme on your profile.",
    price: 2,
  },
];

function AddOns() {
  const { formData, setFormData } = useContext(FormContext);
  const [addedService, setAddedService] = useState({});
  
  // Handle Input Change
  const handleChange = (item) => {
    if (addedService[item.name] != undefined) {
      var temp = addedService;
      delete temp[item.name];
      setFormData({...formData, addons: temp});
      setAddedService(temp);
    } else {
      var temp = { ...addedService, [item.name]: { price: item.price } };
      setFormData({...formData, addons: temp});
      setAddedService(temp);
    }
  };

  // Getting addons if it was already choosen
  useEffect(() => {
    if (Object.keys(formData.addons).length != 0) {
      setAddedService(formData.addons);
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      {addons.map((item) => (
        <div
          className={`flex justify-center items-center gap-4 px-3 py-3 rounded-md md:gap-8 md:px-8 md:py-4 hover:border hover:border-blue-500 ${
            addedService[item.name] !=undefined ? "border-2 border-blue-700" : "border-2 border-gray-300/25"
          }`}
          key={item.id}
        >
          <input
            type="checkbox"
            className="w-5 h-5 accent-blue-600"
            onChange={() => handleChange(item)}
            checked={addedService[item.name] !=undefined}
          />
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col justify-start align-baseline">
              <p className="text-lg md:text-xl font-semibold">{item.name}</p>
              <p className="text-base md:text-md font-normal text-gray-400">{item.des}</p>
            </div>
            <p className="text-sm md:text-base text-blue-500">+${item.price}/mo</p>
          </div>
        </div>
      ))}
    </div>
  )
  ;
}

export default AddOns;
