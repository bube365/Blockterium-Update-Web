import React, { useState, useEffect } from "react";
import BasicPlan from "../Plans/MonthlyPlans/BasicPlan";
import StarterPlan from "../Plans/MonthlyPlans/StarterPlan";
import EnterprisePlan from "../Plans/MonthlyPlans/EnterprisePlan";
import CustomPlan from "../Plans/MonthlyPlans/CustomPlan";

const MonthlyPriceCard = () => {
  return (
    <>
      <div>
        <article className="flex xsm:flex-row flex-col justify-between gap-5 px-12">
          <div className="md:w-[15%] hidden md:flex w-full">
            <h2 className="font-bold text-GreyTwo text-[22px]  xsm:mt-8">
              Choose the best plan for your pocket.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 md:grid-rows-1 sm:grid-cols-2 grid-cols-1 w-full ">
            <div className=" border-4 border-greySix hover:border-LightBlue bg-white  subscription w-full  text-[14px] p-3 ">
              <div className="pt-4">
                <h2 className="font-semibold text-[18px]">Free</h2>
                <h2 className="font-bold mt-1 mb-6 text-[13px]">
                  0 USDT<span className="font-normal text-[12px]">/ month</span>
                </h2>
              </div>

              <ul className="flex flex-col gap-3 mb-5">
                <li className="">Unlimited API calls</li>
                <li className="">5rq/s</li>
                <li className="">Community support</li>
                <li className="">API Testnets</li>
                <li className="">Market Data</li>
              </ul>

              {/* <button
                onClick={openPaymentModal}
                className="BlueGradient text-white py-1 px-2 my-5"
              >
                Choose Plan
              </button> */}
            </div>

            <StarterPlan />
            <BasicPlan />
            <EnterprisePlan />
            <CustomPlan />
          </div>
        </article>
      </div>
    </>
  );
};

export default MonthlyPriceCard;
