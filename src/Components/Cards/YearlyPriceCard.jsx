import React from "react";
import { Link } from "react-router-dom";
import BasicYearlyPlan from "../Plans/YearlySinglePlans/BasicYearlyPlan";
import CustomYearlyPlan from "../Plans/YearlySinglePlans/CustomYearlyPlan";
import StarterYearlyPlan from "../Plans/YearlySinglePlans/StarterYearlyPlan";
import EnterpriseYearlyPlan from "../Plans/YearlySinglePlans/EnterpriseYearlyPlan";

const YearlyPriceCard = () => {
  return (
    <div>
      <article className="flex xsm:flex-row flex-col justify-between gap-5 px-12">
        <div className="xsm:w-[15%] w-full">
          <h2 className="font-bold text-GreyTwo text-[22px] xsm:mt-8">
            Choose the best plan for your pocket.
          </h2>
        </div>
        <div className="grid xsm:grid-cols-5 xsm:grid-rows-1 sm:grid-cols-2 grid-cols-1 w-full">
          <div className=" border-4 border-greySix hover:border-LightBlue bg-white  subscription w-full  text-[14px] p-3 ">
            <div className="pt-4 mb-6">
              <h2 className="font-semibold text-[18px]">Free</h2>
              <h2 className="font-bold my-1  text-[13px]">
                0 USDT <span className="font-normal text-[12px]">/ year</span>
              </h2>
            </div>

            <ul className="flex flex-col gap-3 mb-5">
              <li className="">Unlimited API calls</li>
              <li className="">5rq/s</li>
              <li className="">Community support</li>
              <li className="">API Testnets</li>
              <li className="">Market Data</li>
            </ul>

            {/* <Link to={"#"} className="BlueGradient text-white py-1 px-2 my-5">
              Choose Plan
            </Link> */}
          </div>

          <StarterYearlyPlan />
          <BasicYearlyPlan />
          <EnterpriseYearlyPlan />
          <CustomYearlyPlan />
        </div>
      </article>
    </div>
  );
};

export default YearlyPriceCard;
