import { useContext, useEffect, useState } from "react";
import { FormContext } from "../Context";

const monthly = {
  type: "monthly",
  data: [
    {
      id: 1,
      name: "Arcade",
      img: "./src/assets/images/icon-arcade.svg",
      price: 9,
    },
    {
      id: 2,
      name: "Advanced",
      img: "./src/assets/images/icon-advanced.svg",
      price: 12,
    },
    {
      id: 3,
      name: "Pro",
      img: "./src/assets/images/icon-pro.svg",
      price: 15,
    },
  ],
};

const yearly = {
  type: "yearly",
  data: [
    {
      id: 1,
      name: "Arcade",
      img: "./src/assets/images/icon-arcade.svg",
      price: 90,
      msg: "2 month free",
    },
    {
      id: 2,
      name: "Advanced",
      img: "./src/assets/images/icon-advanced.svg",
      price: 120,
      msg: "2 months free",
    },
    {
      id: 3,
      name: "Pro",
      img: "./src/assets/images/icon-pro.svg",
      price: 150,
      msg: "2 months free",
    },
  ],
};

function Plan() {
  const { formData, setFormData, error } = useContext(FormContext);

  const [planType, setPlanType] = useState(monthly);
  const [plan, setPlan] = useState("");
  const [tog, setTog] = useState(false);
  useState(() => {
    if (formData.plan != null) {
      if (formData.plan?.type === "yearly") {
        setTog(true);
      } else {
        setTog(false);
      }

      if (formData.plan?.type === "yearly") {
        setPlanType(yearly);
      } else {
        setPlanType(monthly);
      }
      setPlan(formData.plan.name);
    }
  }, []);

  // Toggle Controller
  const handleTog = () => {
    setTog(!tog);
    if (planType.type == "monthly") {
      setPlanType(yearly);
      if (formData.plan != null) {
        const getUpdatePlan = yearly.data.filter(
          (item) => item.name == formData.plan.name
        );
        setFormData({
          ...formData,
          plan: {
            type: "yearly",
            name: getUpdatePlan[0].name,
            price: getUpdatePlan[0].price,
          },
        });
      }
    } else {
      setPlanType(monthly);
      if (formData.plan != null) {
        const getUpdatePlan = monthly.data.filter(
          (item) => item.name == formData.plan.name
        );
        setFormData({
          ...formData,
          plan: {
            type: "monthly",
            name: getUpdatePlan[0].name,
            price: getUpdatePlan[0].price,
          },
        });
      }
    }
  };

  //   Handle Plan Select.
  const handleSelect = (item) => {
    setPlan(item.name);
    setFormData({
      ...formData,
      plan: { type: planType.type, name: item.name, price: item.price },
    });
  };

  return (
    <div className="w-full">
      <div className="min-w-full flex flex-col md:flex-row md:justify-between md:mt-5">
        {planType.data.map((item) => (
          <div
            className={`flex w-full p-4 rounded-md bg-neutral-100 gap-5 mt-5 hover:scale-105 hover:border hover:border-blue-500 ${
              plan === item.name
                ? "border border-blue-500"
                : "border border-gray-100"
            } md:flex-col md:w-1/3 md:mx-2`}
            key={item.id}
            onClick={() => handleSelect(item)}
          >
            <img src={item.img} alt="arcade-icon" className="w-10 h-10 md:mb-8" />
            <div className="flex flex-col justify-start items-start">
              <p className="text-xl font-ubuntu_medium">{item.name}</p>
              <p className="text-md font-ubuntu_regular text-gray-400">
                {item.price}$
              </p>
              {item["msg"] !== undefined ? <p>{item.msg}</p> : null}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mt-5 md:mt-8">
        <label className="inline-flex gap-3 items-center cursor-pointer">
          <span
            className={
              !tog
                ? "text-md font-ubuntu_bold text-gray-900"
                : "text-md font-ubuntu_regular text-gray-900"
            }
          >
            Monthly
          </span>
          <input
            type="checkbox"
            className="sr-only peer"
            checked={tog}
            onChange={handleTog}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:ring-blue-300 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          <span
            className={
              tog
                ? "text-md font-ubuntu_bold text-gray-900"
                : "text-md font-ubuntu_regular text-gray-900"
            }
          >
            Yearly
          </span>
        </label>
      </div>
      {error.plan && <p className="text-sm text-red-500 font-semibold">{error.plan}</p>}
    </div>
  );
}

export default Plan;
