import React, { useState } from "react";
import { SubPackages } from "../../assets/index";
import Toggle from "./Toggle";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section
      className="bg-darkestBlue flex flex-col items-center relative sm:px-12 lg:px-[6rem] xl:px-[10rem] overflow-x-hidden"
      id="pricesection"
    >
      <div className="bg-GreyOne w-[70vw] pt-10  flex flex-col items-center rounded-t-[80px]">
        <div className="bg-GreyTwo w-[80vw] pt-10 rounded-t-[80px] flex flex-col items-center justify-center">
          <div className="bg-greySix w-[100vw] rounded-t-[80px] py-[4rem] px-3 ss:px-6 md:px-[4rem] lg:px-[6rem] xl:px-[10rem]">
            <div className="text-center text-[14px] mb-[1rem]">
              <h1 className="font-bold text-[28px] xsm:text-[36px]">
                Plans and Pricing
              </h1>
              <p className="text-[16px]">
                Choose the best plan for your business
              </p>
            </div>
            <div className="bg-white pb-12">
              <Toggle />
              <img
                src={SubPackages}
                className="w-[100vw] hidden md:block"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
