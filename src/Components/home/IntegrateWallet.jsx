import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { integrated } from "../../assets/index";
import { Link } from "react-router-dom";

const IntegrateWallet = () => {
  return (
    <section
      className="bg-black w-full text-white flex flex-col gap-[6rem] pt-[6rem] pb-[10rem] md:pb-[12rem] px-3 ss:px-6  sm:px-12 lg:px-[6rem] xl:px-[10rem]"
      id="howItWorks"
    >
      <div className="flex flex-col xsm:flex-row justify-between items-center relative overflow-x-hidden">
        <article className="xsm:w-[45%] md:w-[38%] w-[100%] ">
          <AiOutlinePlus className="h-10 w-10 text-Lightgrey" />
          <h2 className="tracking-[0.4rem] sm:text-[13px] text-[18px] title">
            FOR BUSINESSES
          </h2>
          <h2 className="text-[38px] ss:text-[42px] sm:text-[44px] xsm:text-[46px] lg:text-[56px] xl:text-[72px] font-bold my-4 w-[90%] tracking-tighter">
            Integrate Secure Wallet Infrastructure For Your product.
          </h2>
          <div className="hidden sm:block">
            <p className="text-grey text-[22px] xsm:text-[20px] lg:text-[22px] xl:text-[24px]">
              Our platform readily connects with any ecosystem. We offer
              infinite scalability and limitless usage for businesses and
              enterprises looking to build a Web3 solution.
            </p>
            <Link to="/login">
              <button className="bg-blue hover:bg-white hover:text-black  justify-center  mt-6 text-white flex items-center gap-1 mb-8 py-2 md:py-1 w-[15rem] xsm:w-[10rem] lg:w-[12rem]">
                Get Started
                <HiOutlineArrowRight className="animatedIcon" />
              </button>
            </Link>
          </div>
        </article>

        <img src={integrated} alt="" className="xsm:w-[40%] w-full z-[5] " />

        <div className="sm:hidden">
          <p className="text-grey text-[22px] xsm:text-[20px] lg:text-[22px] xl:text-[24px]">
            Our platform readily connects with any ecosystem. We offer infinite
            scalability and limitless usage for businesses and enterprises
            looking to build a Web3 solution.
          </p>
          <Link to="/login">
            <button className="bg-blue hover:bg-white hover:text-black  justify-center  mt-6 text-white flex items-center gap-1 mb-8 py-2 md:py-1 w-full">
              Get Started
              <HiOutlineArrowRight className="animatedIcon" />
            </button>
          </Link>
        </div>
        <div className="lightBall "></div>
      </div>
    </section>
  );
};

export default IntegrateWallet;
