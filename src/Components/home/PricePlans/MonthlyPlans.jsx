import React from "react";
import {
  timesIcon,
  greyCheckedIcon,
  GreenCheckedIcon,
} from "../../../assets/index";
import { Link } from "react-router-dom";

const MonthlyPlans = () => {
  return (
    <div>
      <article className="flex xsm:flex-row flex-col justify-between gap-5 px-12">
        <div className="xsm:w-[15%] w-full">
          <h2 className="font-bold text-GreyTwo text-[22px] xsm:mt-8">
            Choose the best plan for your pocket.
          </h2>
        </div>
        <div className="grid xsm:grid-cols-5 xsm:grid-rows-1 sm:grid-cols-2 grid-cols-1 w-full ">
          <div className=" border-4 border-greySix hover:border-LightBlue bg-white  subscription w-full  text-[14px] p-3 ">
            <div className="pt-4">
              <h2 className="font-semibold text-[18px]">Free</h2>
              <h2 className="font-bold mt-1 mb-6 text-[16px] xsm:text-[14px] md:text-[16px]">
                0 USDT <span className="font-normal text-[14px]">/ month</span>
              </h2>
            </div>

            <ul className="flex flex-col gap-3 mb-5">
              <li className="">Unlimited API calls</li>
              <li className="">5rq/s</li>
              <li className="">Community support</li>
              <li className="">API Testnets</li>
              <li className="">Market Data</li>
            </ul>

            <Link
              to={"./sign-up"}
              className="BlueGradient text-white py-1 px-2 my-5"
            >
              Choose Plan
            </Link>
          </div>

          <div className="border-4 border-greySix hover:border-LightBlue w-full text-[14px] p-3 ">
            <div className="pt-4">
              <h2 className="font-semibold text-[16px]">Starter</h2>
              <h2 className="font-bold mt-1 mb-6 text-[16px] xsm:text-[14px] md:text-[16px]">
                20 USDT <span className="font-normal text-[14px]">/ month</span>
              </h2>
            </div>

            <ul className="flex flex-col gap-3 mb-5">
              <li className="">1,000,000 API Calls</li>
              <li className="">200 rq/s</li>
              <li className="">Community support</li>
              <li className="">All Main & Testnets</li>
              <li className="">Market Data</li>
            </ul>
            <Link
              to={"./sign-up"}
              className="BlueGradient text-white py-1 px-2 my-5"
            >
              Choose Plan
            </Link>
          </div>

          <div className="border-4 border-greySix hover:border-LightBlue w-full  text-[14px] p-3 ">
            <div className="pt-4">
              <h2 className="font-semibold text-[16px]">Basic</h2>
              <h2 className="font-bold mt-1 mb-6 text-[16px] xsm:text-[14px] md:text-[16px]">
                60 USDT <span className="font-normal text-[14px]">/ month</span>
              </h2>
            </div>
            <ul className="flex flex-col gap-3 mb-5">
              <li className="">5,000,000 API Calls</li>
              <li className="">200 rq/s</li>
              <li className="">Community support</li>
              <li className="">API Testnets</li>
              <li className="">Market Data</li>
            </ul>

            <Link
              to={"./sign-up"}
              className="BlueGradient text-white py-1 px-2 my-5"
            >
              Choose Plan
            </Link>
          </div>

          <div className="border-4 border-greySix hover:border-LightBlue w-full  text-[14px]  ">
            <div className="bg-veryLightBlue text-LightBlue w-[80%]">
              <p>Recommended</p>
            </div>
            <div className="px-3 py-1">
              <h2 className="font-semibold text-[14px]">Enterprise</h2>
              <h2 className="font-bold mt-1 mb-6 text-[16px] xsm:text-[14px] md:text-[16px]">
                100 USDT{" "}
                <span className="font-normal text-[14px]">/ month</span>
              </h2>
            </div>

            <div className="pb-3 ">
              <ul className="flex flex-col gap-3 px-3 mb-5">
                <li className="">Unlimited API calls</li>
                <li className="">500 rq/s</li>
                <li className="">Community support</li>
                <li className="">API Testnets</li>
                <li className="">Market Data</li>
              </ul>

              <div className="px-3">
                <Link
                  to={"./sign-up"}
                  className="BlueGradient text-white py-1 px-2 my-5"
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          </div>

          <div className="border-4 border-greySix hover:border-LightBlue hover:border-2 w-full text-[14px] p-3 ">
            <div className="pt-4">
              <h2 className="font-semibold text-[16px]">Custom</h2>
              <h2 className="font-bold mt-1 mb-6 text-[16px] xsm:text-[14px] md:text-[16px]">
                200 USDT{" "}
                <span className="font-normal text-[14px]">/ month</span>
              </h2>
            </div>

            <ul className="flex flex-col gap-3 mb-5">
              <li className="">Unlimited API calls</li>
              <li className="">5rq/s</li>
              <li className="">Community support</li>
              <li className="">API Testnets</li>
              <li className="">Market Data</li>
            </ul>

            <Link
              to={"./sign-up"}
              className="BlueGradient text-white py-1 px-2 my-5"
            >
              Choose Plan
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MonthlyPlans;
