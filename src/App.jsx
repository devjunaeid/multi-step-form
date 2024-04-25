import { useState } from "react";
import { FormContext } from "./Context";
import SideBar from "./components/SideBar";
import Button from "./components/Button";
import Form from "./components/Form";
import { CheckInput } from "./utils/FormValidation";

const steps = [
  {
    id: 1,
    step: 1,
    title: "Your Info",
  },
  {
    id: 2,
    step: 2,
    title: "Select Plan",
  },
  {
    id: 3,
    step: 3,
    title: "Add Ons",
  },
  {
    id: 4,
    step: 4,
    title: "Summary",
  },
];

function App() {
  //Current Step.
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: null,
    addons: {},
  });
  const [error, setError] = useState({});
  const totalStep = steps.length;
  const handleNext = () => {
    switch (currentStep) {
      case 1:
        const err = CheckInput({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        });
        setError(err);
        if (Object.keys(err).length == 0) {
          setCurrentStep(currentStep + 1);
        }
        break;
      case 2:
        if (formData.plan == null) {
          setError({ plan: "Please Select a plan to continue!" });
        } else {
          setError("");
          setCurrentStep(currentStep + 1);
        }
        break;
      case 3:
        setCurrentStep(currentStep + 1);
        break;
      default:
        break;
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    if (Object.keys(error).length == 0) {
      setCurrentStep(currentStep + 1);
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen min-w-full flex justify-center items-center bg-neutral-200">
      <FormContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          steps,
          totalStep,
          formData,
          setFormData,
          handleNext,
          handlePrev,
          handleSubmit,
          error,
          setError,
        }}
      >
        {/* Multistep Form Component */}
        <div className="flex flex-col w-full h-lvh bg-zinc-200 md:bg-white md:flex-row md:justify-between md:h-[70vh] md:p-5 md:w-1/2 md:min-w-[900px] md:rounded-md">
          <SideBar />
          <div className="flex flex-col flex-1 w-full h-full justify-between items-center">
            <div className="flex flex-col justify-between w-full h-full md:pl-5">
              <Form />
              {currentStep != 5 && <Button /> }
            </div>
          </div>
        </div>
      </FormContext.Provider>
    </div>
  );
}

export default App;
