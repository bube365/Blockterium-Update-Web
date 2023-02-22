import React, { useState } from "react";
import { ApiCallsLog } from "./data";

const ApiHistory = () => {
  const [view, setView] = useState("firstView");
  return (
    <div className="mt-4 text-[13px] ">
      <table className="w-full text-left">
        <thead>
          <th className="w-[20%] border border-greySeven py-2 pb-4 px-2">
            Time
          </th>
          <th className="w-[40%] border border-greySeven py-2 pb-4 px-2">
            Request
          </th>
          <th className="w-[15%] border border-greySeven py-2 pb-4 px-2">
            Response
          </th>
          <th className="w-[15%] border border-greySeven py-2 pb-4 px-2">
            Request Time
          </th>
        </thead>
      </table>
      {ApiCallsLog.map(({ time, request, response, requestTime, id }) => {
        return (
          <div key={id}>
            {view === "firstView" ? (
              <>
                {id <= 5 && (
                  <table className="w-full text-left ">
                    <tbody>
                      <td className="w-[20%] border border-greySeven py-2 px-2">
                        {time}
                      </td>
                      <td className="w-[40%] border border-greySeven py-2 px-2">
                        {request}
                      </td>
                      <td className="w-[15%] border border-greySeven py-2 px-2">
                        {response}
                      </td>
                      <td className="w-[15%] border border-greySeven py-2 px-2">
                        {requestTime}
                      </td>
                    </tbody>
                  </table>
                )}
              </>
            ) : (
              <>
                {id < 4 && (
                  <table className="w-full text-left">
                    <tbody>
                      <td className="w-[20%] border border-greySeven py-2 px-2">
                        {time}
                      </td>
                      <td className="w-[40%] border border-greySeven py-2 px-2">
                        {request}
                      </td>
                      <td className="w-[15%] border border-greySeven py-2 px-2">
                        {response}
                      </td>
                      <td className="w-[15%] border border-greySeven py-2 px-2">
                        {requestTime}
                      </td>
                    </tbody>
                  </table>
                )}
              </>
            )}
          </div>
        );
      })}

      <div className="flex py-8 items-center justify-end text-[14px]">
        <h2 className="text-mainBlue text-right font-semibold ">page </h2>
        <div>
          <button
            onClick={() => setView("firstView")}
            className={
              view === "firstView"
                ? "bg-mainBlue px-2 text-[12px] mx-3 text-mainWhite"
                : "border border-greySeven px-2 text-[12px] mx-3 text-black"
            }
            // className="bg-mainBlue px-2 text-[12px] mx-3 text-mainWhite"
          >
            1
          </button>
          <button
            onClick={() => setView("secondView")}
            className={
              view === "secondView"
                ? "bg-mainBlue px-2 text-[12px]  text-mainWhite"
                : "border border-greySeven px-2 text-[12px] text-black"
            }
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiHistory;

// <div className="w-full text-black">
//   <table>
//     <tr>
//       <th>Company</th>
//       <th>Contact</th>
//       <th>Country</th>
//     </tr>
//     <tr>
//       <td>Alfreds Futterkiste</td>
//       <td>Maria Anders</td>
//       <td>Germany</td>
//     </tr>
//     <tr>
//       <td>Centro comercial Moctezuma</td>
//       <td>Francisco Chang</td>
//       <td>Mexico</td>
//     </tr>
//   </table>
