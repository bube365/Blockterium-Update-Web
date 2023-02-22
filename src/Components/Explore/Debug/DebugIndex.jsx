// import React, { useState } from "react";
// import TopBarTwo from "../../Containers/TopBarTwo";
// import MobileTopBar from "../../Containers/MobileTopBar";
// import SideBar from "../../Containers/SideBar";
// import Mainnet from "./Mainnet";
// import TestNet from "./TestNet";
// import ActionButton from "../../Inputs/ActionButton";

// const DebugIndex = () => {
//   const [settingsTab, setSettingsTab] = useState("mainnet");
//   return (
//     <div className="w-full bg:w-[85%] h-screen bg:ml-[15%]">
//       <div className="block bg:hidden">
//         <MobileTopBar />
//       </div>
//       <div className="hidden bg:block sticky top-0 right-0 w-full">
//         <TopBarTwo />
//       </div>

//       <div className="w-full py-6 sm:py:10 md:py-12 px-5 sm:px-10 h-full bg-greyEight">
//         <div className="bg-mainWhite w-full  p-3  rounded-md">
//           <div className="flex justify-between items-center">
//             <div className="flex text-sm ss:text-base items-center">
//               <div
//                 onClick={() => setSettingsTab("mainnet")}
//                 className={
//                   settingsTab === "mainnet"
//                     ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
//                     : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
//                 }
//               >
//                 Free Mainnet
//               </div>
//               <div
//                 onClick={() => setSettingsTab("testnet")}
//                 className={
//                   settingsTab === "testnet"
//                     ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
//                     : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
//                 }
//               >
//                 Free Testnet
//               </div>
//             </div>
//             <ActionButton
//               label="Fetch new data"
//               classnames="bg-mainBlue text-mainWhite font-semibold text-xs sm:text-base px-2 sm:px-4 py-2 rounded-md"
//             />
//           </div>
//           <div className="flex justify-between items-center mt-4 ss:mt-6 text-mainBlack">
//             <h3 className="text-base ss:text-xl ">API Calls </h3>
//             <div className="text-xs ss:text-base font-light">
//               <p>Last API calls for given API Key</p>
//             </div>
//           </div>
//           {settingsTab === "mainnet" ? <Mainnet /> : <TestNet />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DebugIndex;

// <div className="block bg-greyEight  bg:ml-[20%] ">
//   <div className="block bg:hidden">
//     <MobileTopBar />
//   </div>
//   <div className="col-span-12 bg:col-span-10 ">
//     <div className="hidden bg:block">
//       <TopBarTwo />
//     </div>
//     <div className="bg-greyEight py-6 sm:py:10 px-5 sm:px-10 h-screen">
//       <div className="bg-mainWhite p-3 h-full rounded-md">
//         <div className="flex justify-between items-center">
//           <div className="flex text-sm ss:text-base items-center">
//             <div
//               onClick={() => setSettingsTab("mainnet")}
//               className={
//                 settingsTab === "mainnet"
//                   ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
//                   : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
//               }
//             >
//               Free Mainnet
//             </div>
//             <div
//               onClick={() => setSettingsTab("testnet")}
//               className={
//                 settingsTab === "testnet"
//                   ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
//                   : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
//               }
//             >
//               Free Testnet
//             </div>
//           </div>
//           <ActionButton
//             label="Fetch new data"
//             classnames="bg-mainBlue text-mainWhite font-semibold text-xs sm:text-base px-2 sm:px-4 py-2 rounded-md"
//           />
//         </div>
//         <div className="flex justify-between items-center mt-4 ss:mt-6 text-mainBlack">
//           <h3 className="text-base ss:text-xl font-seamlessly">
//             API Calls
//           </h3>
//           <div className="text-xs ss:text-base font-light">
//             <p>Last API calls for given API Key</p>
//           </div>
//         </div>
//         {settingsTab === "mainnet" ? <Mainnet /> : <TestNet />}
//       </div>
//     </div>
//   </div>
// </div>

{
  /* <div className="grid grid-cols-12 h-full overflow-auto pb-20">
        <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
          <SideBar />
        </div>
        <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-auto">
          <div className="hidden bg:block">
            <TopBarTwo />
          </div>
          <div className="bg-greyEight py-6 sm:py:10 px-5 sm:px-10 h-full">
            <div className="bg-mainWhite p-3 h-full rounded-md">
              <div className="flex justify-between items-center">
                <div className="flex text-sm ss:text-base items-center">
                  <div
                    onClick={() => setSettingsTab("mainnet")}
                    className={
                      settingsTab === "mainnet"
                        ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                        : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                    }
                  >
                    Free Mainnet
                  </div>
                  <div
                    onClick={() => setSettingsTab("testnet")}
                    className={
                      settingsTab === "testnet"
                        ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                        : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                    }
                  >
                    Free Testnet
                  </div>
                </div>
                <ActionButton
                  label="Fetch new data"
                  classnames="bg-mainBlue text-mainWhite font-semibold text-xs sm:text-base px-2 sm:px-4 py-2 rounded-md"
                />
              </div>
              <div className="flex justify-between items-center mt-4 ss:mt-6 text-mainBlack">
                <h3 className="text-base ss:text-xl font-seamlessly">
                  API Calls
                </h3>
                <div className="text-xs ss:text-base font-light">
                  <p>Last API calls for given API Key</p>
                </div>
              </div>
              {settingsTab === "mainnet" ? <Mainnet /> : <TestNet />}
            </div>
          </div>
        </div>
      </div> */
}
