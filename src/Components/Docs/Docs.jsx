import React from "react";
import { InactiveDoc } from "../../assets";
import { FcDocument } from "react-icons/fc";
import { FaWallet } from "react-icons/fa";
import MobileTopBar from "../Containers/MobileTopBar";

const Docs = () => {
  return (
    <div className="w-full h-screen">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>
      <nav className="bg-mainWhite w-full py-12 md:py-5 px-5 sm:px-10">
        <h2 className="text-center text-mainBlack font-bold text-xl">
          Blockterium Docs
        </h2>
      </nav>

      <div className="w-full bg:w-[85%]  bg:ml-[15%] py-6 sm:py:10 md:py-12 px-5 sm:px-10 h-full bg-greyEight grid xsm:grid-cols-3 sm:grid-cols-3 grid-cols-1 items-center gap-4">
        <div className="bg-mainBlue  h-[10rem] lg:h-[12rem] xl:h-[15rem] rounded-xl text-lg text-greyEight  p-2 flex flex-col items-center justify-center">
          <FaWallet className="text-Lightgrey" />
          <h2 className="my-4 text-mainWhite font-semibold">Wallet </h2>
          <a
            href="https://documenter.getpostman.com/view/2205059/2s8Z73wpyS"
            target="_blank"
            className="bg-gradedBlue bg-opacity-40 rounded-md text-[13px] px-2"
          >
            <h2 className="flex items-center tracking-wide">
              Read documentation <FcDocument className="text-blue" />
            </h2>
          </a>
        </div>

        <div className="bg-mainBlue  h-[10rem] lg:h-[12rem] xl:h-[15rem] rounded-xl text-lg text-greyEight  p-2 flex flex-col items-center justify-center">
          <FaWallet className="text-Lightgrey" />
          <h2 className="my-4 text-mainWhite font-semibold">Market Data </h2>
          <button className="bg-gradedBlue bg-opacity-40 rounded-md text-[13px] px-2">
            <h2 className="flex items-center tracking-wide">
              Read documentation <FcDocument className="text-blue" />
            </h2>
          </button>
        </div>

        <div className="bg-mainBlue  h-[10rem] lg:h-[12rem] xl:h-[15rem] rounded-xl text-lg text-greyEight  p-2 flex flex-col items-center justify-center">
          <FaWallet className="text-Lightgrey" />
          <h2 className="my-4 text-mainWhite font-semibold">Swap </h2>
          <button className="bg-gradedBlue bg-opacity-40 rounded-md text-[13px]  px-2">
            <h2 className="flex items-center  tracking-wide">
              Read documentation <FcDocument className="text-blue" />
            </h2>
          </button>
        </div>

        <div className="bg-mainBlue  h-[10rem] lg:h-[12rem] xl:h-[15rem] rounded-xl text-lg text-greyEight  p-2 flex flex-col items-center justify-center">
          <FaWallet className="text-Lightgrey" />
          <h2 className="my-4 text-mainWhite font-semibold">Event Monitor </h2>
          <button className="bg-gradedBlue bg-opacity-40 rounded-md text-[13px]  px-2">
            <h2 className="flex items-center  tracking-wide">
              Read documentation <FcDocument className="text-blue" />
            </h2>
          </button>
        </div>

        <div className="bg-mainBlue  h-[10rem] lg:h-[12rem] xl:h-[15rem] rounded-xl text-lg text-greyEight  p-2 flex flex-col items-center justify-center">
          <FaWallet className="text-Lightgrey" />
          <h2 className="my-4 text-mainWhite font-semibold">Defi Yield</h2>
          <a
            href="#"
            className="bg-gradedBlue bg-opacity-40 rounded-md text-sm py-1 px-2"
          >
            <h2 className="flex items-center font-medium tracking-wide">
              coming soon...
            </h2>
          </a>
        </div>

        <div className="bg-mainBlue  h-[10rem] lg:h-[12rem] xl:h-[15rem] rounded-xl text-lg text-greyEight  p-2 flex flex-col items-center justify-center">
          <FaWallet className="text-Lightgrey" />
          <h2 className="my-4 text-mainWhite font-semibold">Dex p2p</h2>
          <button className="bg-gradedBlue bg-opacity-40 rounded-md text-sm py-1 px-2">
            <h2 className="flex items-center font-medium tracking-wide">
              coming soon...
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Docs;
