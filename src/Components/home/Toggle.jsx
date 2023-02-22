import React, { useState } from "react";
import MonthlyPlans from "./PricePlans/MonthlyPlans";
import YearlyPlans from "./PricePlans/YearlyPlans";

const Toggle = () => {
  const [toggled, setToggled] = useState(false);

  const toggleSwitch = (event) => {
    setToggled(event.target.checked);
  };

  return (
    <>
      <label
        class="relative flex items-center justify-center mt-2 group text-[16px] bg-greySix pb-[3rem]"
        onChange={toggleSwitch}
      >
        Monthly
        <input
          type="checkbox"
          class="absolute left-1/2 -translate-x-[15%] w-[10px] peer appearance-none rounded-md"
        />
        <span class="w-8 h-4 flex items-center flex-shrink-0 mx-2 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-LightBlue after:w-3 after:h-3 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 "></span>
        Yearly
      </label>

      <div className="mt-6">{toggled ? <YearlyPlans /> : <MonthlyPlans />}</div>
    </>
  );
};

export default Toggle;
