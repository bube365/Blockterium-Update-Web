import React from "react";
import { LimitKey } from "../../../assets";

const TestNet = ({ ApiHistory }) => {
  return (
    <div className="h-full">
      {ApiHistory?.length > 0 ? (
        "Yes show table"
      ) : (
        <div className="h-full flex flex-col mx-auto justify-center">
          <img src={LimitKey} className="w-[100px] flex mx-auto sm:w-[200px]" />
          <p className="text-greyFour text-base sm:text-lg text-center">
            You have not logged any API yet
          </p>
        </div>
      )}
    </div>
  );
};

export default TestNet;
