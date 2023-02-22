import React, { useState } from "react";
import TopBarTwo from "../../Containers/TopBarTwo";
import MobileTopBar from "../../Containers/MobileTopBar";
import { SubPackages } from "../../../assets/index";
import MonthlyPriceCard from "../../Cards/MonthlyPriceCard";
import YearlyPriceCard from "../../Cards/YearlyPriceCard";
import SwitchComp from "../../Inputs/CustomSwitch";

const PricingIndex = () => {
  const [settingsTab, setSettingsTab] = useState("mainnet");
  const [mode, setMode] = useState(false);
  return (
    <div className="bg:w-[85%] w-full h-screen bg:ml-[15%]">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>

      <div className="hidden bg:block sticky top-0 right-0 w-full">
        <TopBarTwo />
      </div>
      <div className="bg-greyEight py-10 sm:py:10 px-5 sm:px-10 ">
        <div className="bg-mainWhite p-3 h-full rounded-md">
          <div className="flex flex-col tracking-wide text-center justify-center">
            <h3 className="sm:text-xl font-bold mb-3">Plans and pricing</h3>
            <p className="sm:w-[25%] mx-auto mb-5 text-greyTen">
              We have a very simple pricing plan with no hidden fees.
            </p>
            <div className="flex text-sm text-greyTen items-center justify-center">
              <p>Monthly</p>
              <SwitchComp setMode={() => setMode(!mode)} mode={mode} />
              <p>Yearly</p>
            </div>
          </div>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-2 mt-6 sm:mt-10">
            <div className="col-span-1">
              <PricingCard />
            </div>
            <div className="col-span-1">
              <PricingCard />

            </div>
            <div className="col-span-1">
              <PricingCard />
            </div>
            <div className="col-span-1">
              <PricingCard />
            </div>
            <div className="col-span-1">
              <PricingCard custom />
            </div>
          </div> */}
          {!mode && (
            <div className="mt-6 mb-2">
              <MonthlyPriceCard />
            </div>
          )}
          {mode && (
            <div className="mt-6 mb-2">
              <YearlyPriceCard />
            </div>
          )}

          <div className="hidden md:block lg:pl-[15rem]">
            <img src={SubPackages} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingIndex;

// <div className="block w-full h-screen overflow-auto">
//   <div className="block bg:hidden">
//     <MobileTopBar />
//   </div>
//   <div className="grid grid-cols-12 h-full overflow-auto">
//     <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
//       <SideBar />
//     </div>
//     <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-auto">
//       <div className="hidden bg:block">
//         <TopBarTwo />
//       </div>

//       <div className="w-full">
//         <PricingCard />
//       </div>
//     </div>
//   </div>
// </div>

// ***************************** old ***************************

{
  /* <div className="bg-greyEight py-10 sm:py:10 px-5 sm:px-10 h-full">
  <div className="bg-mainWhite p-3 h-full rounded-md">
    <div className="flex flex-col tracking-wide text-center justify-center">
      <h3 className="sm:text-xl font-bold mb-3">Plans and pricing</h3>
      <p className="sm:w-[25%] mx-auto mb-5 text-greyTen">
        We have a very simple pricing plan with no hidden fees.
      </p>
      <div className="flex text-sm text-greyTen items-center justify-center">
        <p>Monthly</p>
        <SwitchComp setMode={() => setMode(!mode)} mode={mode} />
        <p>Yearly</p>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-2 mt-6 sm:mt-10">
      <div className="col-span-1">
        <PricingCard />
      </div>
      <div className="col-span-1">
        <PricingCard />
      </div>
      <div className="col-span-1">
        <PricingCard />
      </div>
      <div className="col-span-1">
        <PricingCard />
      </div>
      <div className="col-span-1">
        <PricingCard custom />
      </div>
    </div>
  </div>
</div>; */
}
