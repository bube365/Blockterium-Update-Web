import React from "react";
import { timesbetter, BetterCoins, timesIcon } from "../../assets/index";
// import BlockchainList from "../../assets/BlockchainList.svg";

const BlockteriumUse = () => {
  return (
    <section className="BlueGradient py-[6rem] lg:py-[12rem] flex flex-col xsm:flex-row justify-between items-center px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] relative overflow-x-hidden">
      <div className="purpleBg hidden xsm:flex"></div>
      <div className="lightBg xsm:hidden"></div>
      <article className=" text-white z-[2] ">
        <p className="tracking-[0.3em] text-[14px]">
          BLOCKTERIUM FOR YOUR PRODUCTS
        </p>
        <h1 className="text-[38px]  xsm:text-[46px] lg:text-[56px] xl:text-[72px] font-bold my-4 xsm:w-[70%] mb-8">
          Simplified plug-and-play and built-in payment options for your
          customers.
        </h1>
        <div></div>
        <p className="text-[22px] xsm:text-[20px] lg:text-[22px] xl:text-[24px] text-Lightgrey xsm:w-[70%]">
          Even without prior knowledge of any web3 resource, you can integrate
          our solution to your crypto payment pages effortlessly.
        </p>
      </article>
      <div className="relative ">
        <img src={BetterCoins} className="" alt="" />
        <img
          src={timesbetter}
          className="absolute h-[15rem] xsm:h-[12rem] top-48 md:top-64 lg:top-[18rem] xl:top-[20rem] "
          alt=""
        />
      </div>
    </section>
  );
};

export default BlockteriumUse;
