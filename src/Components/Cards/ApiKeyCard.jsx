import React from "react";
import InputFieldTwo from "../Inputs/InputFieldTwo";

const ApiKeyCard = ({ icon, title, network, creditUsage, plan }) => {
  return (
    <>
      <div className="">
        <div className="flex items-center mb-4">
          <div className="bg-primary p-3 mr-3 h-10 w-10 rounded-full">
            <img src={icon} className="" />
          </div>
          <h3 className="text-mainBlack font-bold">{title}</h3>
        </div>
        <div className="flex items-center mb-3 text-[16px]">
          <h6 className="mr-3 text-greyFive font-semibold">Network</h6>{" "}
          <span className="text-mainBlack">{network}</span>
        </div>
        {/* <div className="flex items-center mb-3 text-[16px]">
          <h6 className="mr-3 text-greyFive font-semibold">Credit Usage</h6>{" "}
          <span className="text-mainBlack">{creditUsage}</span>
        </div> */}
        <div className="flex items-center mb-3 text-[16px]">
          <h6 className="mr-3 text-greyFive font-semibold">Plan</h6>{" "}
          <span className="text-mainBlack">{plan}</span>
        </div>
        {/* <div>
          <InputFieldTwo
            label="Api Key"
            placeholder="***************************"
          />
        </div> */}
      </div>
    </>
  );
};

export default ApiKeyCard;
