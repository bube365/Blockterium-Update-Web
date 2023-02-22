import React from "react";
import { Decentralised, productGradient, cone } from "../../assets/index";
import { products } from "./data";
import { AiOutlinePlus } from "react-icons/ai";

// import BlockchainList from "../assets/BlockchainList.svg";

const BlockteriumProducts = () => {
  return (
    <section
      className="BlueGradient pt-[6rem] sm:pt-[12rem] pb-[6rem] lg:pb-[8rem] lg:py-[12rem] flex flex-col  px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] relative overflow-x-hidden w-full"
      id="productSection"
    >
      <article className=" text-white z-[2] xsm:w-[60%] w-[100%] xsm:mb-12 ">
        <p className="tracking-[0.3em] text-[14px] lg:text-[16px]">
          PRODUCTS YOU CAN BUILD ON
        </p>

        <h1 className="text-[38px] ss:text-[42px]  xsm:text-[46px] lg:text-[56px] xl:text-[72px] font-bold my-4 xsm:w-[90%] md:w-[80%] mb-8 tracking-tighter">
          Build decentralised <br /> applications with <br /> unlimited API
          calls.
        </h1>
        <p className="text-[22px] ss:text-[24px] sm:text-[18px] md:text-[16px] lg:text-[22px] xl:text-[24px] text-Lightgrey xsm:w-[80%] md:w-[60%] w-[100%]">
          Build seamlessly on any supported blockchain without any prior
          blockchain knowledge with Blockterium’s API. Deploy your code once to
          any blockchain of your choice.
        </p>
      </article>
      <img src={productGradient} alt="" className="absolute top-0 right-0 " />

      {/* <div className="z-[2] xsm:hidden">
        <img src={Decentralised} className="z-[2]" alt="" />
      </div> */}

      <div className="grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 xsm:grid-cols-3 xsm:grid-rows-3 gap-6 z-[5] mt-12 xsm:mt-1 grid w-full">
        {products.map(({ info, title }) => {
          return (
            <div className=" text-white border border-dimWhite text-[16px] ss:text-[24px] sm:text-[16px]  lg:text-[22px] xl:text-[24px] px-4 py-3 rounded-xl flex flex-col gap-6 rotateEffectParent relative overflow-hidden">
              <AiOutlinePlus className="h-6 w-6 rotateEffect z-[2]" />
              <img src={cone} alt="" className="h-6 w-6 rotate " />

              <h2 className="font-bold z-[2] ">{title}</h2>
              <p className="text-Lightgrey z-[2]">{info}</p>
              <div className="productCardGrad h-36 w-48"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlockteriumProducts;
