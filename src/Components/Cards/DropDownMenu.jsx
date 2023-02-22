import { Popover } from "@headlessui/react";
import React from "react";

const DropDownMenu = ({ email, username }) => {
  return (
    <div>
      <Popover className="relative">
        <Popover.Button className="flex items-center  border-none outline-none">
          Adedamola <img src={ArrowDown} className="ml-2" />
        </Popover.Button>

        <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-10 w-[300px] bg-mainWhite">
          <div className="flex flex-col">
            <div className="pt-5 px-3 pb-5">
              <h6 className="text-lg">Adewale adedamola</h6>
              <p className="text-greyFour text-sm font-light">
                adedamolamoses@gmail.com
              </p>
            </div>
            <Link
              to="/download"
              className={
                splitLocation[1] === "download"
                  ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base border-t-2 border-t-greyFive"
                  : "py-5 px-3 text-base border-t-2 border-t-greyFive"
              }
            >
              Download pitch deck
            </Link>
            <Link
              to="/billing"
              className={
                splitLocation[1] === "billing"
                  ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                  : "py-5 px-3 text-base"
              }
            >
              Billing
            </Link>
            <Link
              to="/settings"
              className={
                splitLocation[1] === "settings"
                  ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                  : "py-5 px-3 text-base"
              }
            >
              Settings
            </Link>
            <div className="py-5 px-3 text-base" onClick={openModal}>
              Logout
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default DropDownMenu;
