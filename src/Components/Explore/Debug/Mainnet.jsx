import React from "react";
import { LimitKey } from "../../../assets";
import { ApiCallsLog } from "./data";
import ApiHistory from "./ApiHistory";

const Mainnet = () => {
  return (
    <div className="h-full">
      <>
        {ApiCallsLog.length > 0 ? (
          <ApiHistory />
        ) : (
          <div className="h-full flex flex-col mx-auto justify-center">
            <img
              src={LimitKey}
              className="w-[100px] flex mx-auto sm:w-[200px]"
            />
            <p className="text-greyFour text-base sm:text-lg text-center">
              You have not logged any API yet
            </p>
          </div>
        )}
      </>
    </div>
  );
};

export default Mainnet;

//  {
//    ApiHistory?.length > 0 ? (
//      "Yes show table"
//    ) : (
//      <div className="h-full flex flex-col mx-auto justify-center">
//        <img src={LimitKey} className="w-[100px] flex mx-auto sm:w-[200px]" />
//        <p className="text-greyFour text-base sm:text-lg text-center">
//          You have not logged any API yet
//        </p>
//      </div>
//    );
//  }
