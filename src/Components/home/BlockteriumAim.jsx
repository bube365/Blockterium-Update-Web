import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { creatorsCode } from "../../assets/index";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const BlockteriumAim = () => {
  return (
    <section className="blackGradient w-full text-white flex flex-col gap-[6rem] py-[6rem] lg:py-[12rem] xsm:pb-[12rem] px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] ">
      <div className="flex flex-col xsm:flex-row justify-between xsm:items-center ">
        <article className=" xsm:w-[45%] md:w-[38%] ">
          <AiOutlinePlus className="h-10 w-10 text-Lightgrey" />
          <h2 className="tracking-[0.4rem] sm:text-[13px] text-[18px] title">
            BUILT FOR DEVELOPERS
          </h2>
          <h2 className="text-[38px] ss:text-[42px]  xsm:text-[46px] lg:text-[56px] xl:text-[72px] font-bold my-4  tracking-tighter">
            Build great products with ready-made multichain crypto wallet APIs.
          </h2>
          <div className="hidden sm:block">
            <p className="text-grey text-[22px]  sm:text-[24px] xsm:text-[20px] lg:text-[22px] xl:text-[24px]">
              Blockterium offers a framework that reduces the complexity of
              blockchain development. This, in turn, reduces the cost and time
              spent on writing codes.
            </p>
            <Link
              to={"./sign-up"}
              className="bg-blue hover:bg-white hover:text-black  justify-center  mt-6 text-white flex items-center gap-1 mb-8 py-2 md:py-1 w-[15rem] xsm:w-[10rem] lg:w-[12rem]"
            >
              Start for free
              <HiOutlineArrowRight />
            </Link>
          </div>
        </article>
        <img src={creatorsCode} alt="" className="xsm:w-[40%] w-full" />

        <div className="sm:hidden mt-8">
          <p className="text-grey text-[22px]  sm:text-[24px] xsm:text-[20px] lg:text-[22px] xl:text-[24px]">
            Blockterium offers a framework that reduces the complexity of
            blockchain development. This, in turn, reduces the cost and time
            spent on writing codes.
          </p>
          <Link
            to={"./sign-up"}
            className="bg-blue hover:bg-white hover:text-black  justify-center  mt-6 text-white flex items-center gap-1 mb-8 py-2 md:py-1 w-full"
          >
            Start for free
            <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlockteriumAim;
