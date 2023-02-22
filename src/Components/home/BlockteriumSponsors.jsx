import React from "react";
import { sponsors } from "../../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";

const BlockteriumSponsors = () => {
  return (
    <section
      className="bg-black w-full text-12 flex flex-col items-center justify-center py-[3rem] xsm:py-[8rem] sm:pt-[6rem] xsm:pb-[12rem] relative overflow-hidden"
      id="sponsorsSection"
    >
      <p className="text-grey lg:text-[14px] xl:text-[16px]">
        Trusted by 30+ applications
      </p>

      <img src={sponsors} alt="" className="w-full sm:w-[80%]  mb-16" />

      <p className="text-primaryFontColor text-[20px] md:text-[18px] lg:text-[20px] xl:text-[24px] w-[90%] sm:w-[45%] xsm:w-[50%]  text-center mb-3 z-[2]">
        We are a blockchain infrastructure provider enabling you to seamlessly
        utilize secure blockchain node protocols.
      </p>

      <div className="flex ss:flex-row flex-col mt-3 ss:gap-3 text-[20px] md:text-[14px] lg:text-[16px] xl:text-[18px] z-[2]">
        <button className="bg-blue xsm:hover:bg-white hover:text-black  flex items-center gap-2  justify-center text-white w-[15rem] md:w-[10rem] lg:w-[12rem] py-2 md:py-1">
          See case studies <HiOutlineArrowRight className="animatedIcon" />{" "}
        </button>

        <button className="greyGradient text-white mt-4 ss:mt-0 py-2 md:py-1 w-[15rem] md:w-[10rem] lg:w-[12rem]">
          Learn More
        </button>
      </div>
      <div className="sponsorDiv"></div>
    </section>
  );
};

export default BlockteriumSponsors;
