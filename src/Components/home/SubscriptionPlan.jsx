import React, { useState } from "react";
import { SubPackages } from "../assets/index";
import Toggle from "./Toggle";

const SubscriptionPlan = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="bg-darkestBlue overflow-x-hidden md:flex flex-col items-center relative hidden ">
      <div className="bg-GreyOne w-[80vw] pt-10  flex flex-col items-center rounded-t-[80px] ">
        <div className="bg-GreyTwo w-[90vw] pt-10 rounded-t-[80px] flex flex-col items-center justify-center">
          <div className="bg-white w-[100vw] rounded-t-[80px] py-[6rem]  lg:px-[6rem] xl:px-[10rem]">
            <div className="text-center text-[14px] mb-[1rem]">
              <h1 className="font-bold text-[20px]">Plans and Pricing</h1>
              <p className="text-[16px]">
                Choose the best plan for your business
              </p>
            </div>
            <Toggle />
            <img src={SubPackages} className="w-[100vw]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
